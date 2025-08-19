# Pricezy (Next.js 14 + Tailwind + Supabase)

Pages: / (Home), /spinwheel, /emi, /profile, /orders, /wishlist

API routes: /api/spin (daily 5 spins + hidden 1.5 coin cap), /api/redeem (requires 1 completed order), /api/subscription (EZY_EMI or SUPER_EMI)

## Quick Deploy (Vercel + Supabase)
1. Create Supabase project → copy URL, anon key, service role, DB URL.
2. On Vercel: New Project → Import GitHub repo → Add env vars from .env.example.
3. Deploy. You’ll get a URL like https://pricezy-yourname.vercel.app

## Local dev
```bash
npm i
npm run dev
```
