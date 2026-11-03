import type { Metadata } from "next";
import { VideosView } from "@/components/views/VideosView";
export const metadata: Metadata = { title: "Videos", description: "Yatra and darshan videos from Sri Madanmohan Tirth Yatra." };
export default function Page() { return <VideosView />; }
