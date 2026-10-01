# DataFlow

DataFlow is a modern web platform for selling mobile data bundles, airtime top-ups, and utility payments (electricity, cable TV, exam pins, and water bills). It offers a clean storefront for customers with wallet-based payments and instant delivery across all major networks.

## Features

- **Mobile Data Sales** — Purchase data bundles for MTN, Airtel, Glo, and 9mobile with transparent per-network pricing
- **Airtime Top-Up** — Recharge any phone number instantly
- **Utility Payments** — Electricity bills, cable TV subscriptions (DSTV, GOtv, StarTimes), exam pins, and water bills
- **User Authentication** — Secure sign-up and sign-in powered by Lovable Cloud
- **Wallet System** — Fund a wallet once, then pay for multiple services without re-entering card details
- **Transaction History** — Every purchase is recorded with amount, service type, reference, and status
- **Responsive Design** — Optimized for desktop, tablet, and mobile

## Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Frontend   | React 18, TypeScript 5, Vite 5                    |
| Styling    | Tailwind CSS v3, shadcn/ui components             |
| Fonts      | Space Grotesk (headings), Inter (body)            |
| Backend    | Lovable Cloud (managed database, auth, storage)   |
| Security   | Row-Level Security policies on all tables         |

## Getting Started

### Prerequisites

- Node.js 18 or newer (or Bun)
- npm (or bun)

### Installation

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app runs at `http://localhost:8080` by default.

### Environment

Backend connection details are managed by Lovable Cloud and injected automatically. The following variables must be present in `.env` (already configured for this project):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload         |
| `npm run build`   | Create a production build                    |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint                                   |
| `npm test`        | Run the test suite (Vitest)                  |

## Project Structure

```
src/
├── components/        # UI sections (Hero, Services, Pricing, etc.)
│   └── ui/            # shadcn/ui primitives
├── pages/             # Route pages (Index, NotFound)
├── hooks/             # Custom React hooks
├── integrations/      # Backend client (auto-generated)
├── lib/               # Utilities
└── index.css          # Design tokens and theme
supabase/
└── migrations/        # Database schema (profiles, wallets, transactions)
```

## Database Schema

- **profiles** — User profile information (name, phone, email)
- **wallets** — Per-user wallet balance in NGN
- **transactions** — Credits and debits with type, status, service type, and unique reference

All tables use Row-Level Security so users can only read and write their own data. New accounts automatically receive a profile and a zero-balance wallet on sign-up.

## Roadmap

- [ ] Data purchase flow (network selection → phone input → payment)
- [ ] User dashboard with wallet funding and transaction history
- [ ] Admin panel for managing pricing
- [ ] Payment gateway integration for wallet top-ups
- [ ] Mobile app (PWA)

## Deployment

Open the project in [Lovable](https://lovable.dev) and click **Share → Publish**. To use a custom domain, go to **Project Settings → Domains**.

## License

All rights reserved © 2026 DataFlow.
