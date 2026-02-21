# TBL Solutions Website

## Project Overview
Medical billing & revenue cycle management (RCM) marketing website, rebranded from "MedCare MSO" to **TBL Solutions** in Feb 2026.

- **Live URL**: https://tbl-solutions.vercel.app
- **GitHub**: https://github.com/Mjawadasad/tbl-solutions (master branch)
- **Vercel Project**: muhammad-jawad-asads-projects/tbl-solutions (auto-deploys on push to master)

## Tech Stack
- **Framework**: Next.js 16.1.6 (App Router, Turbopack)
- **React**: 19.2.4
- **TypeScript**: 5.9.3 (strict mode)
- **Styling**: Tailwind CSS 4.2.0 (v4 — uses @theme in globals.css, no tailwind.config)
- **Icons**: lucide-react 0.575.0
- **Font**: Poppins (Google Fonts, weights 300–700)
- **Testing**: Playwright 1.58.2

## Scripts
```
npm run dev      # Dev server with Turbopack (localhost:3000)
npm run build    # Production build (27 static pages)
npm start        # Start production server
npm run lint     # ESLint
```

## Project Structure
```
src/
├── app/                        # Pages (App Router)
│   ├── layout.tsx              # Root layout (Poppins font, FloatingWidgets)
│   ├── page.tsx                # Homepage (9 sections)
│   ├── loading.tsx             # Loading skeleton (T logo)
│   ├── not-found.tsx           # 404 page
│   ├── about-us/page.tsx
│   ├── ai-products/[slug]/page.tsx   # 3 AI product pages (SSG)
│   ├── services/[slug]/page.tsx      # 12 service pages (SSG)
│   ├── blog/page.tsx
│   ├── case-studies/page.tsx
│   ├── contact/page.tsx
│   ├── guides/page.tsx
│   ├── specialties/page.tsx
│   ├── testimonials/page.tsx
│   ├── webinars/page.tsx
│   └── whitepapers/page.tsx
│
├── components/                 # Reusable components
│   ├── Header.tsx              # Sticky nav, mega menus, mobile accordion
│   ├── Footer.tsx              # Links, CTA banner, socials
│   ├── Hero.tsx                # Hero with dashboard mockup
│   ├── Services.tsx            # 5-card services grid
│   ├── Stats.tsx               # Animated counters
│   ├── About.tsx               # About section with milestones
│   ├── Testimonials.tsx        # Auto-playing carousel (5 testimonials)
│   ├── WhyChooseUs.tsx         # 3 value props
│   ├── ServingSince.tsx        # History/timeline section
│   ├── Specialties.tsx         # 50+ specialties grid
│   ├── Contact.tsx             # Contact form + info
│   ├── CTABanner.tsx           # Reusable CTA (configurable title/subtitle)
│   ├── DemoModal.tsx           # Demo request modal
│   ├── FloatingWidgets.tsx     # Floating phone/email FAB
│   ├── PageHero.tsx            # Reusable page hero with breadcrumbs
│   ├── ResourceCard.tsx        # Card for blog/guides/webinars
│   ├── ScrollReveal.tsx        # Scroll animation wrapper
│   ├── LogoCarousel.tsx        # Client logos marquee
│   ├── BlogCarousel.tsx        # Blog post carousel
│   ├── about/                  # About page sub-components
│   │   ├── CoreValues.tsx
│   │   ├── KPIMetrics.tsx
│   │   ├── MissionSection.tsx
│   │   └── VisionSection.tsx
│   └── contact/
│       └── OfficeLocations.tsx # CA (HQ) + NM offices
│
├── data/                       # Typed data files
│   ├── services.ts             # 12 services (ServiceData interface)
│   └── aiProducts.ts           # 3 AI products (AIProductData interface)
│
└── hooks/
    └── useScrollAnimation.ts   # IntersectionObserver hook
```

## Design System (globals.css @theme)
```
Primary:   #0367A5 (sky blue)    Primary-dark: #024f7e   Primary-light: #e8f4fb
Accent:    #7EB63E (lime green)  Accent-dark:  #6a9a33   Accent-light:  #f0f8e6
Dark:      #1a1a2e (navy)

Gradients: .gradient-primary, .gradient-hero, .gradient-accent
Animations: .animate-float, .animate-pulse-glow, .animate-fade-up, .animate-marquee
Utilities: .card-hover (lift+shadow), .btn-slide (slide-up effect), .scroll-reveal
```

## Brand Info
- **Company**: TBL Solutions (formerly MedCare MSO)
- **Staffing arm**: TBL Force (formerly MedCare Force)
- **Phone**: 800-640-6409
- **Email**: info@tblsolutions.com
- **HQ**: 18001 Sky Park Circle, Irvine, CA 92614
- **Office 2**: 4801 Lang Ave NE, Suite 110, Albuquerque, NM 87109
- **Founded**: 2012
- **Tagline**: Trusted by 150,000+ healthcare providers

## Key Patterns
- Dynamic routes use `generateStaticParams()` + `generateMetadata()` for SSG
- "use client" on interactive components (Header, forms, modals, carousels)
- Data-driven pages: add a service/product to `src/data/` and its page auto-generates
- Logo JSX: icon letter "T" + "TBL" (primary) + "Solutions" (accent) — in Header.tsx & Footer.tsx
- All pages follow: Header → PageHero → Content → CTABanner → Footer

## Deployment
- Push to `master` → Vercel auto-deploys
- Build must pass (`npm run build`) before pushing
- No environment variables needed — fully static site
