# Sri Madanmohan Tirth Yatra, Jaipur

Bilingual (English / हिंदी) website for the pilgrimage tours organised by Dr. J. P. Agrawal. Built with Next.js (App Router) and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Deploys to Vercel with no extra settings.

## Editing yatras

All package content is in `lib/data.ts`, and the Sri Lanka yatra is in `lib/sri-lanka.ts`. Each package has English and Hindi text side by side.

- `startDate` (ISO date) controls ordering on the departure board and the "Leaves in N days" or "Completed" label. Past yatras move to the end of the board automatically.
- Optional fields: `hotels`, `paymentPolicy`, `cancellationPolicy`, `notes`, `gallery` and `brochure`. A section only appears when its field is filled.
- Local images live in `public/images/`.

## Pages

| Route | Content |
| --- | --- |
| `/` | Departure board, featured Sri Lanka yatra, how we travel, testimonials |
| `/packages` | All yatras with Upcoming / India / Abroad filters |
| `/packages/[id]` | Day-by-day plan, hotels, inclusions, policies, photos, booking card |
| `/about`, `/gallery`, `/videos`, `/contact` | Story & team, photos, YouTube, enquiry form & FAQ |

Bookings go through WhatsApp and phone: the enquiry form opens WhatsApp with the details already filled in.
