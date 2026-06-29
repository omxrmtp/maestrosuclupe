# Maestro Suclupe — Sitio Web Oficial

Sitio web oficial de **Maestro Virgilio Suclupe**, ritualista espiritual con más de 30 años de experiencia en amarres de amor, retorno de pareja, limpieza espiritual y rituales en el cementerio.

Construido con **Next.js 16** (App Router) + **React 19** + **Tailwind CSS v4** + **TypeScript**.

---

## ✨ Stack

- **Next.js 16.2.9** (App Router, Turbopack, SSG)
- **React 19.2**
- **Tailwind CSS v4** con `@theme` + CSS vars
- **TypeScript 5**
- **Nodemailer** para el formulario de contacto
- **Zod** para validación
- **Google Fonts** (Cinzel + Lato) auto-hospedadas con `next/font`
- **Vercel** para hosting (configuración incluida)

---

## 🚀 Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales SMTP

# Iniciar dev server
npm run dev
# → http://localhost:3000
```

---

## 📦 Build de producción

```bash
npm run build   # genera .next/
npm start       # sirve en puerto 3000
```

Build verificado: **12 páginas estáticas** (home, /servicios, 5× /servicios/[slug], not-found, icon) + 1 ruta dinámica API.

---

## 🌐 Deploy a Vercel (recomendado)

1. Sube el código a GitHub (este repo).
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repo.
3. Vercel detecta Next.js automáticamente. Click **Deploy**.
4. Configura las variables de entorno en **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` (ej. `https://maestrosuclupe.com`)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - `CONTACT_TO_EMAIL`
5. Redeploy.

El archivo `vercel.json` ya incluye:
- Headers de seguridad (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
- Cache de imágenes a 1 año (inmutable)
- Región: `gru1` (São Paulo — más cercano a Perú)

---

## 🔧 Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL absoluta del sitio (para SEO/OG) | `https://maestrosuclupe.com` |
| `SMTP_HOST` | Host del servidor SMTP | `smtp.resend.com` / `smtp.gmail.com` |
| `SMTP_PORT` | Puerto SMTP | `587` (TLS) / `465` (SSL) |
| `SMTP_USER` | Usuario SMTP | `resend` / `tu@gmail.com` |
| `SMTP_PASS` | Contraseña / API key | `re_xxx...` / app password |
| `CONTACT_TO_EMAIL` | Email destino del formulario | `contacto@maestrosuclupe.com` |

Ver `.env.local.example` para la plantilla completa.

### Proveedores SMTP recomendados

- **Resend** (gratis hasta 3k emails/mes): `smtp.resend.com:465` con `SMTP_USER=resend`
- **Gmail** con App Password: `smtp.gmail.com:587` + app password de 16 caracteres
- **SendGrid**, **Mailgun**, **Brevo** también funcionan sin cambios

---

## 📁 Estructura

```
maestroyani-clone/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, OG)
│   ├── page.tsx                # Home (homepage)
│   ├── globals.css             # Design system (CSS vars + @theme)
│   ├── icon.png                # Favicon
│   ├── favicon.ico             # Favicon legacy
│   ├── robots.ts               # /robots.txt
│   ├── sitemap.ts              # /sitemap.xml
│   ├── api/contact/route.ts    # POST handler con Nodemailer + Zod
│   └── servicios/
│       ├── page.tsx            # Índice de servicios
│       └── [slug]/page.tsx     # Detalle de servicio (SSG)
├── components/                 # 13 componentes React
│   ├── ui/                     # Section.tsx, Reveal.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Lightbox.tsx
│   ├── Testimonials.tsx
│   ├── SecondaryBanner.tsx
│   ├── Contact.tsx
│   ├── PaymentMethods.tsx
│   ├── Footer.tsx
│   ├── FloatingWidget.tsx
│   └── PromoPopup.tsx
├── lib/
│   ├── constants.ts            # SITE, NAV_LINKS, SERVICES, TESTIMONIALS, GALLERY
│   └── mailer.ts               # Nodemailer lazy-cached
├── public/
│   ├── img/                    # Logo, hero, services, gallery, testimonials
│   └── (imágenes servidas directamente)
├── .env.local.example
├── next.config.ts
├── vercel.json
├── tailwind.config (via @theme)
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Sistema de diseño

Tokens en `:root` y `@theme` de `app/globals.css`:

| Token | Valor | Uso |
|---|---|---|
| `--bg-color` | `#0f000d` | Fondo principal |
| `--panel-color` | `#190015` | Paneles, footer |
| `--accent-color` | `#ff2e6d` | Acento principal (rosa/magenta) |
| `--hover-color` | `#c71f51` | Hover del acento |
| `--text-main` | `#ffffff` | Texto principal |
| `--text-muted` | `#9ca3af` | Texto secundario |
| `--font-heading` | Cinzel | h1–h6 |
| `--font-body` | Lato | Párrafos y UI |

Easings custom: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--duration-fast/base/slow`.

---

## 🔍 SEO

- **Metadata** completa: title, description, keywords, Open Graph, Twitter Cards, canonical
- **`robots.ts`**: permite indexación completa
- **`sitemap.ts`**: incluye home, /servicios y 5 páginas de detalle
- **JSON-LD** listo para añadir (pendiente)
- **Imágenes OG** automáticas vía `next/image`
- **`metadataBase`** configurado para URLs absolutas en OG

---

## ♿ Accesibilidad

- Skip link "Saltar al contenido principal"
- Focus visible con outline + offset
- `prefers-reduced-motion` respetado globalmente
- ARIA labels en iconos, focus trap en modales, Escape para cerrar
- Contraste WCAG AA
- Navegación por teclado completa

---

## 📞 Contacto

- **WhatsApp**: +51 922 159 268
- **Sitio**: [maestrosuclupe.com](https://maestrosuclupe.com)

---

## 📄 Licencia

Privado. Todos los derechos reservados © 2026 Maestro Suclupe.
