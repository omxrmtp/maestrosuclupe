<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: maestroyani-clone (Maestro Suclupe)

Spanish-language (es-PE) marketing site for a spiritual services practitioner. Static Next.js 16 App Router site deployed to Vercel (`gru1` region). One dynamic API route handles the contact form.

## Commands

Only three scripts exist in `package.json` — there is **no lint, typecheck, or test** script:

```bash
npm run dev      # next dev, http://localhost:3000
npm run build    # next build (SSG: generates all /servicios/[slug] pages)
npm start        # next start (serves .next/ on :3000)
```

`next.config.ts` (TypeScript, not `.js`) sets `images.formats = ["image/webp"]` and `reactStrictMode: true`. Tailwind v4 runs through `@tailwindcss/postcss` (`postcss.config.mjs`) — there is no `tailwind.config.*` file.

## Architecture (where to look)

- `app/layout.tsx` — root layout. Defines `<html lang="es-PE">`, loads Cinzel + Lato via `next/font/google` (vars `--font-cinzel`, `--font-lato`), mounts `OrganizationJsonLd` + `WebSiteJsonLd`, sets `metadataBase` from `NEXT_PUBLIC_SITE_URL`.
- `app/page.tsx` — home; just composes section components.
- `app/servicios/page.tsx` — services index.
- `app/servicios/[slug]/page.tsx` — service detail. Uses **async params** (`params: Promise<{ slug: string }>`), SSG via `generateStaticParams()` over `SERVICES`, per-service `generateMetadata`, JSON-LD (`Service`, `Breadcrumb`, `FAQ`), and a per-slug FAQ map (`faqsForService` near the bottom of the file).
- `app/api/contact/route.ts` — POST handler. **Forced to `runtime = "nodejs"`** because Nodemailer does not run on Edge. Validates with Zod 4, escapes HTML, sends via `getMailer()`.
- `app/robots.ts` — tiered AI-crawler allow/block list (GPTBot, ClaudeBot, etc. allowed; Bytespider blocked).
- `app/sitemap.ts` — emits home + `/servicios` + one entry per `SERVICES` slug.
- `lib/constants.ts` — **the single source of truth** for site copy and data: `SITE` (name, WhatsApp, phone, copyright), `NAV_LINKS` (with `children` for the Servicios dropdown), `SERVICES` (5 entries: `amarres-de-amor`, `retorno-de-pareja`, `basta-de-sufrir`, `destruyo-al-enemigo`, `rituales-en-el-cementerio`), `GALLERY`, `TESTIMONIALS`. Each `Service` carries: `slug`, `title`, `shortDesc`, `heroSubtitle`, `description[]`, `image`, `benefits[]`, `process[]`, `duration`, `metaDescription`.
- `lib/mailer.ts` — lazy-cached Nodemailer transporter. Throws if `SMTP_HOST`/`SMTP_USER`/`SMTP_PASS` are missing.
- `components/` — server components by default. Client components are explicitly marked `"use client"`: `Contact.tsx`, `PromoPopup.tsx`, `ui/Reveal.tsx`, `Lightbox.tsx`, `Navbar.tsx` (most likely — check for the directive). `JsonLd.tsx` is server-rendered.
- `components/ui/Reveal.tsx` — IntersectionObserver-based scroll-reveal wrapper. Pair with CSS class `.reveal` / `.is-visible` defined in `globals.css`.
- `app/globals.css` — Tailwind v4 `@import "tailwindcss"` + `@theme { ... }` tokens (the design system). Defines utility classes: `.btn-primary`, `.btn-ghost`, `.card-mystic`, `.input-mystic`, `.input-mystic.is-invalid`, `.section-divider`, `.eyebrow`, `.text-muted`, `.skip-link`, `.animate-float-y`, `.animate-ping-slow`, `.animate-spin-slow`, `.shimmer`. Custom easings/durations exposed as CSS vars (`--ease-out`, `--duration-fast/base/slow`).
- `public/llms.txt` — hand-curated for AI crawlers; update when service list or contact info changes.
- `public/img/{gallery,services,identity,testimonials,banners,hero,popup}/` — service hero images referenced by `SERVICES[i].image` (paths like `/img/gallery/amarres-100-efectivos.webp`).

## Conventions that differ from defaults

- **No tests, no ESLint, no Prettier, no CI, no pre-commit hooks, no Husky, no lint-staged.** Don't add them unless asked.
- **No `not-found.tsx`** in `app/` despite what `README.md` line 46 claims — that's stale. Next's default 404 applies.
- **No `tailwind.config.*`**. Tailwind v4 reads `@theme {}` from `app/globals.css`. To add a design token, edit that block, not a JS config.
- **No `tsconfig.json` path alias** beyond `@/*` → root. Use `@/components/...`, `@/lib/...`.
- **Slug is the URL fragment AND the `Services` array key.** Adding a service means appending to `SERVICES` in `lib/constants.ts` with a unique `slug`, a `description[]` of 2–3 paragraphs, and a working `image` path under `public/img/`. SSG picks it up automatically via `generateStaticParams`.
- **Copy is Spanish.** `app/`, `lib/`, and `components/` strings are user-facing Spanish. Keep new copy in Spanish unless explicitly told otherwise.
- **SEO/JSON-LD is per-page, not via a plugin.** `OrganizationJsonLd` + `WebSiteJsonLd` live in the root layout; per-service `ServiceJsonLd`/`BreadcrumbJsonLd`/`FaqJsonLd` are emitted inside `app/servicios/[slug]/page.tsx`.
- **Hard-coded fallback URLs.** `process.env.NEXT_PUBLIC_SITE_URL || "https://maestrosuclupe.com"` is repeated in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `components/JsonLd.tsx`, `app/servicios/[slug]/page.tsx`. If you change the production domain, grep for the fallback.
- **Email sender is `"Maestro Suclupe Web" <${SMTP_USER}>`.** `SMTP_USER` must be a valid sender for the SMTP provider; some providers (e.g. Resend) require it to match the authenticated user.

## Environment

Copy `.env.local.example` → `.env.local`. All five are needed for the contact form to send mail; the build does not require them.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL for OG/canonical/sitemap/JSON-LD |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASS` | Nodemailer transport. Port 465 → `secure: true` (see `lib/mailer.ts`) |
| `CONTACT_TO_EMAIL` | Recipient of the contact form. Falls back to `SMTP_USER` if unset |

On Vercel, set them in **Settings → Environment Variables**, then redeploy. `vercel.json` pins region `gru1` and adds security headers + 1-year immutable cache for `/img/*`.

## Branch / PR / release

Single branch: `main`. No PR template, no CODEOWNERS, no release script. `git log --oneline` shows the work is shipped as small semantic commits (`feat: ...`, `feat(geo): ...`).

## Quick verification flow

There is no automated gate. After changes, do at least:

1. `npm run build` — surfaces type errors and broken imports. Expects SSG success for all 5 service slugs.
2. `npm run dev` + manual click-through of home, `/servicios`, one `/servicios/[slug]`, and the contact form (which will 500 if SMTP env is missing — that's expected in dev without creds; check the 500 message instead of the wire format).

For Next.js API or convention questions, **read `node_modules/next/dist/docs/` first** — the docs in the `next` package are version-matched (16.2.9) and override any training data.
