# Akshith Reddy — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Motion** (Framer Motion).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts) — experience, projects, skills, education, achievements and links.

- **Profile photo:** add `public/profile.jpg` (square, ≥ 800px) and set `photo: "/profile.jpg"` in `profile.ts`.
- **Resume:** replace `public/Akshith_Reddy_Resume.pdf`.
- **Project screenshots:** each project currently uses generated cover art (`src/components/sections/ProjectArt.tsx`).

## Structure

```
src/
  app/            layout, page, 404, OG image, favicon, sitemap, robots
  components/
    layout/       Navbar, Footer, Loader, MotionProvider
    sections/     Hero, About, Skills, Experience, Projects, Education, Achievements, Contact
    ui/           Reveal, Typewriter, CountUp, Spotlight, Magnetic, Cursor, BrandIcons
  data/profile.ts content (single source of truth)
```

## Contact form

Uses [FormSubmit](https://formsubmit.co) (no backend). The first submission sends a one-time activation email to the inbox — click it once to start receiving messages.

## Deploy

Deployed on Vercel. Push to `main` → automatic production deploy.
