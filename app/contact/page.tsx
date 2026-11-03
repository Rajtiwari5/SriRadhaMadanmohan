import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
export const metadata: Metadata = { title: "Contact & FAQ", description: "Call or WhatsApp Dr. J. P. Agrawal (+91 94142 48951) to book a yatra seat." };
export default function Page() { return <ContactView />; }
