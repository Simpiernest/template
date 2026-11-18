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

Artwork is displayed from the user-supplied reference images using CSS image regions. Product names, prices, buttons, forms, navigation, and page layouts are real HTML/React components, not screenshot overlays. Reference imagery is stored locally in `public/assets`.

This project has no API routes, database, authentication service, payment gateway, or backend business logic. Demo data is stored on this browser only. Clear site storage to reset the sample cart and profile.

## Verification

`npm run lint` checks TypeScript and `npm run build` creates the production build.

For the browser regression checks, start the app on port 3000 and run `npm run test:e2e`. The script uses a separate headless Chrome profile, exercises cart totals, discounts, variants, wishlist persistence, validated checkout and order history, then checks the routes at 390px, 768px, 1024px, and desktop widths. Screenshots and a JSON check report are written to the ignored `test-results` folder. On other systems set `CHROME_PATH` to a Chromium executable; use `TEST_URL` to test a different local port.
