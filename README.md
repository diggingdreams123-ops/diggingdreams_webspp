# Digging Dreams website

Responsive, dependency-free website for **Digging Dreams** — Louisville's indoor sandbox play space.
*Dig. Build. Imagine. Dream.*

## Structure
```
index.html              Single-page site (all sections)
privacy-policy/         Terms & Conditions and Privacy Policy page (/privacy-policy/)
assets/css/styles.css   Styles (design tokens at top, mobile-first)
assets/js/main.js       Config (booking/waiver links), mobile menu
assets/images/          Logo, favicon, photos and illustrations
apps-script/Code.gs     Google Apps Script that emails enquiries
```

## Run locally
Open `index.html`, or run `python3 -m http.server 8000` and visit http://localhost:8000.

## Enquiry form (free, emails the owner, address stays hidden)
Enquiries (name, email, phone, message) post to a Google Apps Script web app that emails the owner.
1. Sign in to the Google account that should receive enquiries and open https://script.google.com, then New project.
2. Paste in `apps-script/Code.gs`.
3. Deploy > New deployment > Web app. Execute as: **Me**. Who has access: **Anyone**. Authorize when prompted.
4. Copy the Web App URL (ends in `/exec`) into `scriptUrl` in `assets/js/main.js`.
5. If you edit the script later, use Deploy > Manage deployments > Edit > New version.
No email address appears in this repo or on the site; mail goes to the account that owns the script.

## Before launch (search for `TODO`)
- Final hours, phone, email, social links
- Booking and waiver URLs, plus the Formspree form endpoint (edit `CONFIG` in `assets/js/main.js`)
- Parking, walk-in policy, food/cake policy, memberships
- Verify cleaning claims against Louisville/Kentucky requirements

## Deploy
Static files only: works on GitHub Pages, Netlify, Cloudflare Pages or Vercel (no build step).
