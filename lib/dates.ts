import type { TourPackage } from "./data";

export function isUpcoming(p: TourPackage, now = new Date()) {
  if (!p.startDate) return false;
  const start = new Date(p.startDate + "T00:00:00+05:30");
  return start.getTime() >= now.getTime() - 24 * 3600 * 1000;
}

export function daysUntil(p: TourPackage, now = new Date()) {
  if (!p.startDate) return null;
  const start = new Date(p.startDate + "T00:00:00+05:30");
  return Math.ceil((start.getTime() - now.getTime()) / (24 * 3600 * 1000));
}

export function sortByDate(list: TourPackage[]) {
  return [...list].sort((a, b) => (a.startDate ?? "9999").localeCompare(b.startDate ?? "9999"));
}

/** First number in a price string, e.g. "₹23,000 (Delhi…)" → "₹23,000" */
export function headlinePrice(price: string) {
  const m = price.match(/₹\s?[\d,]+/);
  return m ? m[0].replace(/\s/, "") : price;
}
