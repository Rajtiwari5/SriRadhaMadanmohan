import type { Metadata } from "next";
import { GalleryView } from "@/components/views/GalleryView";
export const metadata: Metadata = { title: "Gallery", description: "Photos of tirths and temples from Sri Madanmohan Tirth Yatra pilgrimages." };
export default function Page() { return <GalleryView />; }
