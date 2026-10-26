# Abdul Samad — Portfolio

A personal portfolio for software engineer Abdul Samad. It presents professional experience, technical skills, services, selected projects, and contact links, with dedicated detail pages for projects.

## Built with

- Next.js 16 (App Router)
- React 19 and TypeScript
- Tailwind CSS 4

## Getting started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Site configuration

Set `NEXT_PUBLIC_SITE_URL` to the deployed site's public origin (for example, `https://example.com`). You can add it to a local `.env.local` file; `.env.example` shows the expected format. This enables canonical URLs, absolute social-sharing image URLs, and the sitemap. If it is unset, those canonical URLs and social-sharing images are omitted, and the sitemap is empty.

Portfolio content is maintained in `src/data/`:

- `site.ts` — name, headline, location, avatar, and resume paths
- `about.ts`, `experience.ts`, `skills.ts`, and `services.ts` — profile and portfolio sections
- `projects.ts` — project descriptions, technologies, categories, and links
- `social-links.ts` — email and social profiles

Project details are generated from the project entries at `/projects/[slug]`.

## Assets

The avatar and resume are served from `public/images/developer-avatar.webp` and `public/resume/Abdul-Samad-Resume.pdf`. Project screenshots can be added at `public/projects/school-management.webp` and `public/projects/android-lms.webp`. Add or replace assets at these paths and rebuild the site for production.

## Deployment

Deploy as a Next.js application on Vercel or another platform that supports Next.js. Configure `NEXT_PUBLIC_SITE_URL` with the production origin in the deployment environment.
