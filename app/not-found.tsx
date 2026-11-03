import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-start justify-center py-20">
      <h1 className="text-4xl">Page not found · पृष्ठ नहीं मिला</h1>
      <p className="mt-3 text-ink-soft">The page may have moved. See our current yatras instead.</p>
      <Link href="/packages" className="btn btn-primary mt-6">See yatras · यात्राएं देखें</Link>
    </div>
  );
}
