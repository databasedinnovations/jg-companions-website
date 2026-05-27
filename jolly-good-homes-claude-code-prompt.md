# Claude Code Starting Prompt — Jolly Good Homes Website Rebuild

Paste the text below into Claude Code to kick off the project.

---

## PROMPT TO PASTE INTO CLAUDE CODE

I'm rebuilding my real estate brochure website as a static site to host on GitHub Pages with a custom domain from Porkbun. The site is for **Jolly Good Homes**, a Keller Williams real estate agent named **Angel Salcedo** serving the Kansas City metro area.

I have the following existing component files in this folder. Please read all of them before doing anything:

- `home-buying-tips.html` — accordion-style guide for buyers (6 sections)
- `home-selling-checklist.html` — accordion-style guide for sellers (5 sections)
- `partners.html` — partner directory page (Ecoswift Junk Removal + coming soon)
- `reviews.html` — client reviews grid with hero and CTA
- `quote-carousel.html` — rotating quote widget for embedding
- `home_buying_tips.md` — source content for the buying tips page

---

### Brand Guide

**Colors:**
- Gold: `#EDCC66` (C:5 M:19 Y:80 K:0 / R:237 G:204 B:102)
- Navy: `#25435D` (C:94 M:71 Y:41 K:28 / R:37 G:67 B:93)
- Light Gold: `#f5e5b3`
- Dark Navy: `#1a2f42`
- Text Dark: `#2c3e50`
- Text Light: `#5a6c7d`
- Background: `#fafbfc`

**Fonts (Google Fonts):**
- Headings: `Playfair Display` (600, 700, 800)
- Body serif: `Lora` (400, 500)
- UI/sans: `Source Sans 3` (400, 600)

**Logo wordmark:** "Jolly Good HOMES" — "Jolly Good" in Proxima Nova Medium, "HOMES" in a custom style. For the web, use Playfair Display for the wordmark since Proxima Nova requires a license.

---

### What I Need You to Build

Please build a complete multi-page static website with the following structure:

```
/
├── index.html          ← Homepage
├── buying.html         ← Home Buying Tips (use existing component)
├── selling.html        ← Home Selling Checklist (use existing component)
├── reviews.html        ← Reviews page (use existing component)
├── partners.html       ← Partners page (use existing component)
├── contact.html        ← Simple contact page
├── css/
│   └── global.css      ← Shared styles: nav, footer, reset, brand variables
├── js/
│   └── main.js         ← Shared JS: mobile nav toggle, any global behavior
└── CNAME               ← Will contain the custom domain (placeholder for now)
```

---

### Page-by-Page Instructions

#### `index.html` — Homepage

Build a polished homepage with these sections, in order:

1. **Navigation bar** — Logo left, nav links right: Home, Buy, Sell, Reviews, Partners, Contact. Hamburger menu on mobile. Sticky on scroll with a slight box shadow.

2. **Hero section** — Full-width, navy gradient background with gold top border. Large headline: *"Your Kansas City Home Journey Starts Here."* Subheadline: *"Expert guidance from Angel Salcedo at Keller Williams — serving buyers and sellers across the KC metro."* Two CTA buttons: "I'm Buying" (links to buying.html) and "I'm Selling" (links to selling.html). Gold accent color for buttons.

3. **Quote carousel** — Embed the quote carousel widget from `quote-carousel.html` directly into the page. Do not use an iframe — inline the HTML/CSS/JS.

4. **Two-column feature cards** — "Buying a Home?" card linking to buying.html and "Selling Your Home?" card linking to selling.html. Cards use white background, gold left border on hover, navy heading, short description text.

5. **About strip** — Narrow full-width navy section. Text: *"Angel Salcedo is a dedicated Keller Williams agent serving the Kansas City metro with honesty, market expertise, and genuine care for every client."* Small photo placeholder (gray circle with initials "AS").

6. **Partners preview** — Two-column section showing the Ecoswift Junk Removal partner card (pulled from partners.html) with a "See All Partners" link.

7. **Footer** — Dark navy background. Logo left. Nav links center. Right column: email `info@jollygoodcompanions.com`, phone placeholder, copyright `© 2025 Jolly Good Homes. All rights reserved.` Gold accent on links.

#### `buying.html` and `selling.html`

Wrap the existing accordion components in the shared nav and footer. Do not alter the accordion logic or CSS — just embed the component `<div>` and its styles inside the full page shell. Add a simple page hero (navy bar) with the page title above the component.

#### `reviews.html` and `partners.html`

Same treatment — wrap the existing components in the shared nav/footer shell. Add the page-title hero bar.

#### `contact.html`

Simple page with:
- Page hero (navy, "Get in Touch")
- A centered card with: name, email, phone, message fields (styled to brand)
- A submit button (gold, navy text)
- Since this is static (no backend), use a `mailto:` form action pointing to `info@jollygoodcompanions.com` OR add a note that we'll wire up Formspree later
- Angel's contact info: email `info@jollygoodcompanions.com`

---

### Technical Requirements

- **Pure HTML/CSS/JS only** — no frameworks, no build tools, no npm. Must work by opening `index.html` in a browser with no server.
- **Google Fonts** loaded via `<link>` in `<head>`.
- **CSS custom properties** (variables) for all brand colors — defined once in `global.css` and reused everywhere.
- **Responsive** — mobile-first. Nav collapses to hamburger at 768px. Grids stack to single column on mobile.
- **Accessibility basics** — semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`), alt text on images, sufficient color contrast.
- **No broken links** — all internal `href` values must match actual filenames.
- **GitHub Pages ready** — no server-side code, no absolute paths that would break on a subdomain.

---

### After Building the Site — GitHub Pages Setup

Once the files are ready, please also:

1. Create a file called `CNAME` in the root with just the text: `jollygoodhomes.com` (placeholder — I'll update once the domain is purchased).

2. Create a `README.md` with:
   - Project name and description
   - How to run locally (just open index.html)
   - GitHub Pages deployment instructions (Settings → Pages → Deploy from branch `main` / `root`)
   - Porkbun DNS setup instructions:
     - Add an `A` record for `@` pointing to the four GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - Add a `CNAME` record for `www` pointing to `[your-github-username].github.io`
     - In the GitHub repo Settings → Pages → Custom domain, enter `jollygoodhomes.com`
     - Check "Enforce HTTPS" after DNS propagates (~30 min)

---

### Things to Watch Out For

- The existing components use **scoped class names** (e.g. `.home-tips-container`, `.jgh-reviews`) to avoid style conflicts with Squarespace. Keep these intact.
- The `quote-carousel.html` uses `document.querySelectorAll` and button IDs — if you inline it into a page that already has JavaScript, make sure there are no ID conflicts.
- The reviews and partners pages use emoji characters that render fine in modern browsers — leave them as-is.
- The `â€"` and `â†'` characters in some files are encoding artifacts from copy-paste. When you encounter them in content, replace with proper `—` (em dash) and `→` (arrow) entities.

---

### Nice-to-Have (Do These Last)

- A `favicon.ico` or inline SVG favicon using the gold/navy brand colors
- Smooth scroll behavior (`scroll-behavior: smooth` in CSS)
- Active nav link highlighting based on current page
- A simple "back to top" button on longer pages

---

**Start by reading all the existing files, then confirm the file structure you're going to create before writing any code.**
