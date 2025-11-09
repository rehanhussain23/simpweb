# SimpWeb E‑Commerce Demo — Product Requirements Document (PRD)

## 1. Overview
SimpWeb is a lightweight, static demo UI showcasing a modern e‑commerce experience with client‑side cart, category browsing, product listing, and a login simulation. It is designed to run without a backend for quick prototyping, and later integrate with a Spring Boot API.

## 2. Goals
- Present a clean, responsive catalog UI with categories and products.
- Support client‑side cart: add, increment/decrement quantity, remove, clear, checkout mock.
- Persist cart in `localStorage` so it survives page reloads.
- Show a product modal with larger image, description, price, and actions.
- Provide demo images for visual completeness.

## 3. Non‑Goals
- Real payments or order processing.
- Production authentication/authorization.
- Server‑side rendering or SEO work.
- Full admin/product management UI.

## 4. Personas
- Visitor: Browses categories and products; adds items to cart; performs mock checkout.
- Developer: Uses the demo to validate UI/UX and integrates APIs later.

## 5. Functional Requirements
### 5.1 Catalog & Categories
- Display categories and allow filtering products by category.
- Search input filters products by name and description.
- Pagination shows products in pages of 8.

### 5.2 Product Cards
- Each card shows image, name, description snippet, price, rating.
- Buttons: `Add to Cart` and `View` (opens modal).

### 5.3 Product Modal
- Shows larger image, full description, price, rating.
- Actions: `Add to Cart`, `Close`.

### 5.4 Cart
- Header shows cart badge with total item count.
- Cart panel lists items with thumbnail, name, price, quantity.
- Controls: increment, decrement (min 1), remove, clear.
- Calculates and displays total price.
- Checkout triggers a success toast and clears the cart.
- Cart state stored in `localStorage`.

### 5.5 Login Simulation
- Simple form sets a mock token and basic user info; logout clears token.

## 6. Data Model (Client‑side)
- Category: `{ id: number, name: string }`
- Product: `{ id, categoryId, name, description, price, rating, imageUrl, flags }`
- CartItem: `{ id, name, price, imageUrl, qty }`

## 7. UX & Visual Design
- Dark theme with accent colors and soft shadows.
- Responsive grid: `auto-fill` min card width 220px.
- Consistent button styles and spacing.
- Images sized to avoid layout shift (`height` fallback, `object-fit: cover`).

## 8. Error Handling
- Toasts for network errors and success states.
- Image `onerror` fallback to placeholder data URI.

## 9. Performance
- Minimal JS; client‑side rendering only.
- Avoids heavy deps; no build step required for static demo.

## 10. Accessibility
- Alt text on images.
- Modal has close button and overlay; focus trapping (future enhancement).

## 11. Integration (Future)
- Spring Boot API endpoints:
  - `GET /api/categories` — list categories
  - `GET /api/products` — paginated products
  - `GET /api/products/category/{id}` — products by category
  - `POST /api/auth/login` — authentication
- Replace demo data by wiring `fetchJSON` calls.

## 12. Success Metrics
- Page renders without errors.
- Cart actions are responsive (<100ms perceived).
- No broken images; placeholder shows when assets fail.

## 13. Release Plan
- v0.1: Static UI with demo data and cart (current).
- v0.2: Sorting, wishlist, coupon simulation, checkout confirmation dialog.
- v0.3: API integration with Spring Boot backend.

## 14. Known Issues / Backlog
- Some environments may render SVGs with low contrast; fallback placeholder is available. Consider PNGs for wider compatibility.
- Add keyboard accessibility to modal and buttons.

## 15. Deployment Notes
- Local development: `python -m http.server 8082` inside `src/main/resources/static`.
- GitHub Pages: host the `static` folder contents at the site root.