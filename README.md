# Jollygood Companions — Static Website

A clean, fully static rebuild of [jollygoodcompanions.com](https://www.jollygoodcompanions.com) — hosted on GitHub Pages with a custom domain from Porkbun (or any registrar).

**Business:** Jollygood Companion Services  
**Owner:** Angel Salcedo  
**Contact:** angelsalcedo@jollygoodcompanions.com | (913) 608-7373  
**Service Area:** Kansas City Metro Area

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, services overview, gallery, testimonials, CTA |
| `services.html` | Full services list with detailed descriptions |
| `team.html` | Team member profiles |
| `testimonials.html` | All client testimonials |
| `partners.html` | Trusted partner directory (Ecoswift + coming soon) |
| `contact.html` | Contact page with form and direct contact info |
| `privacy-policy.html` | Privacy policy |
| `css/global.css` | All shared styles — brand variables, nav, footer, cards, layout |
| `js/main.js` | Mobile nav toggle, scroll behavior, active link highlighting |
| `CNAME` | GitHub Pages custom domain file |

---

## Running Locally

No build tools or server required. Just open the file:

```bash
open index.html
```

Or drag `index.html` into any browser window. All links are relative, so every page works without a server.

---

## Deploying to GitHub Pages

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial static site build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jg-companions-website.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main` / folder: `/ (root)`
5. Click **Save**

Your site will publish at `https://YOUR-USERNAME.github.io/jg-companions-website/`

---

## Custom Domain Setup (Porkbun)

### In Porkbun DNS Settings

Add these DNS records for `jollygoodcompanions.com`:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | `185.199.108.153` | 600 |
| `A` | `@` | `185.199.109.153` | 600 |
| `A` | `@` | `185.199.110.153` | 600 |
| `A` | `@` | `185.199.111.153` | 600 |
| `CNAME` | `www` | `YOUR-USERNAME.github.io` | 600 |

### In GitHub Repo Settings → Pages

1. Under **Custom domain**, enter: `jollygoodcompanions.com`
2. Click **Save** — GitHub will verify DNS (takes ~5–30 min)
3. Once DNS is verified, check **Enforce HTTPS**

> **Note:** The `CNAME` file in the repo root must contain exactly `jollygoodcompanions.com` (one line, no `https://`). It's already set correctly.

---

## Updating the Contact Form

The contact form currently uses `mailto:` which opens the visitor's email client. For a real serverless form backend, replace the form `action` in `contact.html` with a [Formspree](https://formspree.io) endpoint:

```html
<!-- Replace this: -->
<form action="mailto:angelsalcedo@jollygoodcompanions.com" method="GET" enctype="text/plain">

<!-- With this: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Formspree's free tier handles up to 50 submissions/month.

---

## Brand Colors (CSS Variables)

Defined in `css/global.css` under `:root`:

```css
--color-primary:       #1C4A6E;   /* Deep trust blue */
--color-primary-dark:  #152F46;   /* Darker navy */
--color-accent:        #F0A040;   /* Warm amber (CTAs) */
--color-bg:            #FAFBFC;
--color-surface:       #FFFFFF;
--color-text-dark:     #1C3A52;
--color-text-body:     #374151;
```

---

## Fonts

Loaded from Google Fonts (no license required):

- **Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (600, 700, 800)
- **Body / UI:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (400, 500, 600)

---

*Built as a static HTML/CSS/JS site — no frameworks, no build tools, no npm.*
