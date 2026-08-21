# Rohit Jangir — Portfolio

React + TypeScript + Tailwind CSS site built from the provided Figma/design references.

## Structure

```
src/
├── pages/                 # one flat file per route (Home.tsx, About.tsx, ...)
├── components/
│   ├── Home/               # section components used only by Home.tsx
│   ├── About/
│   ├── Ventures/
│   ├── Pitch/
│   ├── Investor/
│   ├── Mentorship/
│   ├── Resources/
│   ├── CaseStudy/
│   └── shared/              # Navbar, Footer, CTASection, Stepper, Button, IconFeatureCard, Layout
├── assets/images/          # logo + photos copied from your uploads
├── types/                  # shared TypeScript interfaces
├── App.tsx                 # react-router routes
└── main.tsx
```

Each page file only composes its section components — no raw markup lives directly in a page file. Anything reused across pages (Navbar, Footer, the "Ready to Transform Your Vision?" CTA, the numbered step process) lives in `components/shared/`.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- Colors, type (Playfair Display for headings, Inter for body), and layout were derived directly from the screenshots/PDFs you shared for Home, About, Ventures, Pitch, Investor, Mentorship, Resources, and Case Study.
- A few images (hero illustrations, article thumbnails, client photos) are placeholder blocks (`bg-card`) since the original raster assets weren't available to embed — swap in your real photos/illustrations in the relevant component files under `src/assets/images/` and update the `<img>` tags.
- Forms (Pitch, Investor Relations) are client-side only right now — wire up the `onSubmit` handlers in `PitchForm.tsx` / `InvestorForm.tsx` to your backend or a service like Formspree when ready.
