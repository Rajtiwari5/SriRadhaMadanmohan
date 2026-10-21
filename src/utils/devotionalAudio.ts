// Web Audio API ambient devotional sound generator (Tanpura & temple bell resonance)
// Zero external network dependencies, works offline and reliably.

class DevotionalAudioService {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.isPlaying = true;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 2);
      this.masterGain.connect(this.ctx.destination);

      // Root Sa drone (C#3 ~ 138.59 Hz) and Pa drone (G#3 ~ 207.65 Hz)
      const freqs = [138.59, 207.65, 277.18];
      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Lowpass filter for warm acoustic warmth
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.12 / (idx + 1), this.ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);
        osc.start();
      });

      // Periodic gentle temple bell chime
      this.playTempleBell();
      this.intervalId = window.setInterval(() => {
        if (this.isPlaying) {
          this.playTempleBell();
        }
      }, 7000);
    } catch {
      this.isPlaying = false;
    }
  }

  private playTempleBell() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const bellGain = this.ctx.createGain();
      bellGain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;
      bellGain.gain.setValueAtTime(0.001, now);
      bellGain.gain.linearRampToValueAtTime(0.04, now + 0.05);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      const bellFreqs = [528, 1056, 1584];
      bellFreqs.forEach(f => {
        if (!this.ctx) return;
        const bellOsc = this.ctx.createOscillator();
        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(f, now);
        bellOsc.connect(bellGain);
        bellOsc.start(now);
        bellOsc.stop(now + 4);
      });
    } catch {
      // Audio context may be closed
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => {
          if (this.ctx) {
            this.ctx.close();
            this.ctx = null;
          }
        }, 500);
      } catch {
        if (this.ctx) {
          this.ctx.close();
          this.ctx = null;
        }
      }
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const devotionalAudio = new DevotionalAudioService();
