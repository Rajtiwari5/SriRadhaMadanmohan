import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";
export const metadata: Metadata = { title: "About us", description: "Sri Madanmohan Tirth Yatra, Jaipur — founded in 2019 by Dr. J. P. Agrawal." };
export default function Page() { return <AboutView />; }
