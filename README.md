# agoroll

A multi-tenant club management platform for Rotary clubs. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, NextAuth.js, and Zustand.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Icons:** Lucide React
- **Auth:** NextAuth.js (Credentials provider)
- **State:** Zustand
- **Font:** Satoshi (via Fontshare)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file and set a real secret for production use:

```bash
cp .env.example .env.local
```

```
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Log in

Visit `/login` and use the demo credentials:

- **Email:** `admin@agoroll.com`
- **Password:** `password123`

## Project Structure

```
app/
├── (public)/              # Marketing site (no auth)
│   ├── page.tsx           # Homepage
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   └── login/page.tsx
├── dashboard/              # Authenticated app (protected by middleware)
│   ├── layout.tsx          # Sidebar + navbar shell
│   ├── page.tsx            # Dashboard home
│   ├── events/
│   ├── members/
│   ├── reports/
│   ├── directory/
│   ├── donations/
│   ├── withdrawals/
│   ├── analytics/
│   ├── communications/
│   ├── team/
│   ├── subscription/
│   └── settings/
├── api/
│   ├── auth/[...nextauth]/route.ts
│   ├── dashboard/metrics/route.ts
│   ├── members/route.ts
│   └── events/route.ts
├── layout.tsx
├── providers.tsx
└── globals.css

components/
├── ui/                     # shadcn/ui primitives
├── Sidebar.tsx
├── Navbar.tsx
├── MarketingNav.tsx
├── MarketingFooter.tsx
├── PricingSection.tsx
├── MetricCard.tsx
├── EmptyState.tsx
├── StatCard.tsx
└── SearchBar.tsx

lib/
├── auth.ts                 # NextAuth config
├── mock-data.ts             # Mock members / events / metrics
├── pricing-data.ts
└── utils.ts

types/
└── index.ts

middleware.ts                # Protects /dashboard/* routes
```

## Design System

**Colors**

| Token | Hex |
|---|---|
| Primary Navy | `#0A1628` |
| Secondary Navy | `#1A2C4A` |
| Accent Blue | `#2D7FF9` |
| Success | `#10B981` |
| Warning | `#F59E0B` |
| Danger | `#EF4444` |
| Surface Light | `#F8FAFC` |
| Text Primary | `#0F172A` |
| Text Secondary | `#475569` |
| Border | `#E2E8F0` |
| Background | `#FFFFFF` |

**Typography:** Satoshi (300 / 400 / 500 / 700 / 900), loaded from Fontshare in `app/globals.css`.

## Authentication

Auth is implemented with NextAuth's Credentials provider (`lib/auth.ts`). The mock user is:

- `admin@agoroll.com` / `password123`

All `/dashboard/*` routes are protected by `middleware.ts`; unauthenticated visitors are redirected to `/login`, and authenticated visitors to `/login` are redirected to `/dashboard`.

> This is a demo auth setup with a single hardcoded credential. Swap the `authorize()` function in `lib/auth.ts` for a real user store (database, API, etc.) before shipping to production.

## Mock API Routes

- `GET /api/dashboard/metrics` — dashboard stats
- `GET /api/members` — member roster (10 sample members)
- `GET /api/events` — club events (3 sample events)

Replace these with real data sources when connecting a backend.

## Responsive Behavior

- **Desktop (1024px+):** Full sidebar always visible
- **Tablet (768–1023px):** Sidebar still renders full-width when open; cards adapt to a 2-column grid
- **Mobile (<768px):** Sidebar is hidden behind a hamburger toggle in the navbar; all grids stack to a single column

## Build for Production

```bash
npm run build
npm run start
```

## License

Proprietary — built for agoroll.
