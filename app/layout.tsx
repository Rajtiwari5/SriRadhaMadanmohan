import type { Metadata, Viewport } from "next";
import "@fontsource/mukta/400.css";
import "@fontsource/mukta/500.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";
import "@fontsource/yatra-one/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/noto-sans-devanagari/400.css";
import "@fontsource/noto-sans-devanagari/600.css";
import "@fontsource/noto-sans-devanagari/700.css";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LegacyHeader } from "@/components/legacy/Header";
import { LegacyFooter } from "@/components/legacy/Footer";
import { WhatsAppFloat } from "@/components/legacy/WhatsAppFloat";

const siteUrl = "https://www.srimadanmohantirthyatra.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sri Madanmohan Tirth Yatra, Jaipur — Pilgrimage tours 2026–27",
    template: "%s · Sri Madanmohan Tirth Yatra",
  },
  description:
    "Pilgrimage tours from Jaipur by Dr. J. P. Agrawal: Sri Lanka Ramayana Yatra (20–25 Jan 2027), Dwarka–Somnath, South India Yatra 2027 and more. Satvik meals without onion & garlic, AC stays, guided darshan.",
  keywords: ["tirth yatra Jaipur", "Sri Lanka Ramayana Yatra 2027", "South Yatra 2027", "Dwarka Somnath yatra", "pilgrimage tour Jaipur"],
  openGraph: {
    type: "website",
    siteName: "Sri Madanmohan Tirth Yatra",
    images: ["/images/sri-lanka/poster.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#E65100",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
            Skip to content
          </a>
          <LegacyHeader />
          <main id="main">{children}</main>
          <LegacyFooter />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
