# The Pulse Family of Apps — website

Served by GitHub Pages at https://pulsefamily.app/ — the family page plus
`magipulse/`, `seapulse/`, `studipulse/`, `magicalpulse/`, `beachpulse/`,
`linkspulse/`, `travel-advisors/`, `videos/` and `about/`.

## Domain and email (since 2026-10-23)

- **pulsefamily.app** is registered at Namecheap. The `CNAME` file in this repo
  plus the custom-domain setting under Settings → Pages make GitHub serve the
  site there, with HTTPS enforced (.app domains are HTTPS-only in browsers).
- Namecheap → Advanced DNS must keep **four A records** for `@`
  (185.199.108.153 / .109 / .110 / .111) and **CNAME `www` → `tpgllc-dev.github.io.`**.
  Never re-add Namecheap's parking records (`URL Redirect @`, `www → parkingpage`).
- Every `tpgllc-dev.github.io/...` address, including the legal repos, 301-forwards
  to the same path here. Shipped apps and printed links depend on that, so: never
  remove `CNAME`, never rename the `tpgllc-dev` account or delete a legal repo,
  and keep the domain on auto-renew.
- If the certificate is ever missing after a DNS change, remove and re-add the
  custom domain in Settings → Pages; that restarts issuance.
- **Email** uses Namecheap's free forwarding (Mail Settings → Email Forwarding,
  which adds locked MX + SPF records; leave them alone):
  `advisors@pulsefamily.app` → tpgllc.advisor@gmail.com and
  `support@pulsefamily.app` → TPGLLC.Support@gmail.com. Each Gmail account sends
  as its address through "Send mail as" (smtp.gmail.com:587, an app password
  named "pulsefamily mail"). Recipients see "via gmail.com"; removing that needs
  a paid mailbox. Never delete either Gmail account: shipped apps still list them.

## Content rules

- Every claim on a page describes the app as it ships today; each page's header
  comment says what was checked and when. "Coming soon" stays until the App
  Store listing is live.
- Privacy, terms and support links go to each app's legal repo, served under
  this domain (`/MagiPulse-legal/`, `/SeaPulse/`, `/StudiPulse-legal/`,
  `/MagiCalPulse-legal/`, `/BeachPulse-legal/`, `/LinksPulse-legal/`). Those are
  separate repos; edit them there, not here.
- Videos are 720 px web copies of the finished promo videos (~3 MB each).
- No cookies, no analytics, no third-party requests (the display font is
  self-hosted, SIL OFL — see `assets/fonts/OFL.txt`).
- No Disney, Universal or SeaWorld logos, photos or fonts.

Maintained by The Penelope Group LLC.
