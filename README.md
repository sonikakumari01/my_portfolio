# Sonika Kumari — Portfolio

A production-ready personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. For a production build:

```bash
npm run build
npm run preview
```

## Updating content

Almost everything on the site is driven from one file:

**`src/data/portfolio.ts`** — personal info, bio, strengths, skills, education,
certifications, projects, and nav items. Edit this file to update copy; you
generally won't need to touch component code for content changes.

## Adding real assets

The site currently ships with honest placeholders instead of invented data.
To finish setup:

1. **Profile photo** — add a square image (800×800px or larger) at
   `public/images/sonika-profile.jpg`. If it's missing, the hero shows a
   graceful monogram fallback instead of a broken image.
2. **Resume** — add the PDF at `public/documents/Sonika-Kumari-Resume.pdf`.
3. **Certificate** — add the PDF at `public/documents/drone-bootcamp-certificate.pdf`.
4. **Social links** — set `socials.github` and `socials.linkedin` in
   `src/data/portfolio.ts` (currently `null`, which renders the icons as
   disabled placeholders rather than dead or fake links).
5. **Projects** — add entries to the `projects` array in
   `src/data/portfolio.ts` once real projects exist; the empty state
   disappears automatically and a project grid renders instead.
6. **Contact form backend** — the form validates client-side but does not
   fabricate a backend. Set `VITE_CONTACT_ENDPOINT` in a `.env.local` file
   (see `.env.example`) once a real endpoint (serverless function,
   Formspree, EmailJS, etc.) exists. See `src/utils/contactService.ts`.

## Notes

- Theme (light/dark) follows the OS by default and persists once the user
  toggles it manually; a small inline script in `index.html` prevents a
  flash of the wrong theme on load.
- `prefers-reduced-motion` is respected globally via CSS and checked
  explicitly in a couple of animation-heavy components.
- Exact date of birth is intentionally omitted from the public UI as a
  privacy consideration for a public-facing site.
