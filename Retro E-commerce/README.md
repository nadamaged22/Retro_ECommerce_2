# Next Gen — Make it Viral

Retro-themed fashion storefront scaffolded with Next.js (App Router), Tailwind CSS, and a simple cart context.

Quick start:

```bash
npm install
npm run dev
```

Project structure highlights:
- `app/` — App Router pages: `page.tsx`, `about/page.tsx`, `shop/page.tsx`, `cart/page.tsx`
- `components/` — `Navbar`, `Footer`, `HeroSection`, `ProductCard`, `CartItem`
- `context/CartContext.tsx` — cart state with localStorage persistence
- `lib/products.ts` — mock product catalog

Notes:
- Replace placeholder images in `public/` with real assets (logo provided separately).
- This is a front-end prototype — no backend integrated yet.
