import type { Metadata } from "next";
import { PackagesView } from "@/components/views/PackagesView";

export const metadata: Metadata = {
  title: "Yatra packages 2026–27",
  description: "All pilgrimage tours from Jaipur: Sri Lanka Ramayana Yatra, Dwarka–Somnath, South India Yatra 2027, Jagannath Puri, Char Dham and Nepal.",
};

export default function Page() {
  return <PackagesView />;
}
