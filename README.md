# Shopfinity

A responsive, frontend-only Next.js storefront based on the supplied Shopfinity desktop, tablet, and mobile reference screens.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` followed by `npm start`.

## Pages and interactions

- Home, product catalog, organic skincare collection, individual product pages, About, Contact, wishlist, cart, checkout, confirmation, and account dashboard.
- Real Next.js routes support direct links, reloads, and browser history.
- Product search, category/rating/price/availability/brand filters, sorting, grid/list layouts, and pagination.
- Persistent wishlist and cart, separate color/size variants, quantities from 1–99, removal, and clear-cart behavior.
- Currency calculations use integer cents. WELCOME10 gives a 10% discount, followed by estimated 7% tax. Delivery choices are reflected in the confirmation.
- Demo checkout validates shipping/contact fields, saves a local order snapshot, and clears the cart. Payment details are fixed sample values; no payment, shipment, or email is created.
- Editable local account profile, saved addresses, notification preferences, and demo order history.
- Contact and newsletter forms provide frontend feedback without transmitting information.

## Architecture

- `src/context/Store.tsx`: browser-persisted shopping state.
- `src/data/catalog.ts`: product data and reference-art coordinates.
- `src/components/StoreUI.tsx`: shared navigation, footer, cards, totals, and form controls.
- `src/components/ShoppingPages.tsx`, `OrderPages.tsx`, and `ContentPages.tsx`: storefront screens.
- `src/app/globals.css`: desktop, tablet, and mobile styling.

Artwork is displayed from the user-supplied reference images using SVG image regions. Product names, prices, buttons, forms, navigation, and page layouts are real HTML/React components, not screenshot overlays. Reference imagery is stored locally in `public/assets`.

This project has no API routes, database, authentication service, payment gateway, or backend business logic. Demo data is stored on this browser only. Clear site storage to reset the cart and demo profile.

## Verification

`npm run lint` checks TypeScript and `npm run build` creates the production build.

For the browser regression checks, start the app on port 3000 and run `npm run test:e2e`. The script uses a separate headless Chrome profile, exercises cart totals, discounts, variants, wishlist persistence, validated checkout and order history, then checks the routes at 390px, 768px, 1024px, and desktop widths. Screenshots and a JSON check report are written to the ignored `test-results` folder. On other systems set `CHROME_PATH` to a Chromium executable; use `TEST_URL` to test a different local port.

## Animation preferences

`src/data/branding.ts` keeps the typed `animationConfig` alongside branding. Presets accept their named effect or `none`; Quick View, wishlist motion, and hero autoplay can be toggled independently. The default carousel interval is 6000ms. It pauses on hover, keyboard focus, touch interaction, hidden tabs, and reduced-motion preferences. A visible Play/Pause control is available.

`MotionUI.tsx` provides reusable Motion scroll reveals, route fades, and accessible overlays. Product cards reveal in 80ms staggered groups, lift 6px and zoom artwork on hover. Quick View supports variants, quantity, wishlist, and add-to-cart feedback. The header cart opens a sliding drawer with live quantities and rounded totals. Both overlays support Escape, focus trapping, focus restoration, and scroll locking. Touch screens always show Quick View. System reduced-motion preferences suppress movement and autoplay.

Browser regression checks also cover the drawer, Quick View, success feedback, and reduced-motion autoplay behavior. All interactions remain frontend-only.

New visitors start with an empty cart. The v3 browser store migrates the previous demo state by removing its seeded units while preserving shopper-added units, wishlist, profile, and orders.
