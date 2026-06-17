# SEEHWA Green Foundation Website

Static multi-page public-facing website for `seehwagreen.org`.

## Purpose

This is the display website for SEEHWA Green Foundation, the umbrella organization for Ladakh projects. It is designed to make a strong first impression for stakeholders, investors, CSR partners, donors and local communities.

## Stack

Plain static HTML, CSS and JavaScript. No build step is required.

This can be hosted for free on GitHub Pages, Netlify, Vercel or Cloudflare Pages.

## Pages

- `index.html` - homepage and routing overview.
- `about.html` - organization profile, vision, mission and recognition.
- `work.html` - focus areas and ground-level impact.
- `team.html` - team and advisor overview.
- `contribute.html` - volunteer, internship, CSR, partnership, donation and newsletter placeholders.
- `contact.html` - contact details and collaboration routes.
- `privacy.html` - privacy policy placeholder for the static website.

## Auxiliary Files

- `styles.css` - responsive visual design.
- `script.js` - mobile menu and placeholder newsletter behavior.
- `robots.txt` - crawler instructions.
- `sitemap.xml` - canonical sitemap for `seehwagreen.org`.
- `llms.txt` - LLM-readable organization summary.
- `CNAME` - custom domain entry for GitHub Pages.
- `assets/images/` - optimized copies of selected project assets.

## Pending Integrations

- UPI ID
- UPI QR image
- Razorpay / Instamojo / Cashfree payment link
- Newsletter backend
- Contact/CSR form backend
- Final legal donation text after compliance review

## Local Preview

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` from this directory.
