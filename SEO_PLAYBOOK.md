# Clover Digital — SEO & GEO Playbook

**Goal:** rank #1 on Google for "clover digital" and be the canonical "Clover Digital" that AI assistants (ChatGPT, Claude, Perplexity, Gemini) cite for relevant queries.

**Reality check:** "Clover Digital" is a crowded name. At least 7 other companies use some form of it:
- Clover Network / Clover POS (Fiserv — the biggest "Clover" SERP competitor)
- cloverdigital.eu (EU marketing agency)
- cloverdigital.io (education/senior care resources)
- cloverdigitalsolutions.com (real estate marketing)
- cloverdigitalmedia.com (Michigan boutique media)
- cloverdigital.com.my (Malaysian industrial automation)
- cloverdigitalbrands.com (learning resources)
- gocloverdigital.com (digital services agency)

Our structural advantage: **we own `cloverdigital.com` (the exact-match `.com`)**. That's a major ranking factor for the branded query. What's missing is brand authority signals — which is what this playbook builds.

Code-side on-page SEO is already strong (schema, static content for crawlers, sitemap, FAQ, blog). Remaining work is **off-site** — and almost all of it requires Mason's accounts.

---

## Priority Order (do these in order)

1. ✅ **On-page schema & entity definitions** — shipped 2026-04-21 (this commit batch)
2. 🔴 **Google Search Console** — verify the domain and submit the sitemap. Nothing ranks without this.
3. 🔴 **Google Business Profile (video verification)** — already a pending task on prairie-fleet. Local pack ranking depends on this.
4. 🔴 **Bing Webmaster Tools** — same as GSC but for Bing + ChatGPT's web browsing uses Bing index.
5. 🟡 **LinkedIn Company Page** — highest-ROI social profile. Appears in SERP, shows up in Knowledge Graph.
6. 🟡 **X (Twitter) @cloverdigital handle** — claim before someone else does.
7. 🟡 **Crunchbase profile** — feeds AI assistants; Crunchbase data is heavily weighted by Perplexity and ChatGPT.
8. 🟢 **Directory citations** (Clutch, Yelp, BBB, Springfield Chamber, etc.)
9. 🟢 **Backlinks** (guest posts, local press, Illinois Tech Council, SCORE, etc.)
10. 🟢 **Ongoing content** (blog cadence, case studies once clients go live)

Legend: 🔴 critical · 🟡 high · 🟢 compound over time

---

## 1. Google Search Console (CRITICAL)

### Verify the domain
1. Go to https://search.google.com/search-console
2. Add property → **Domain property** (not URL-prefix) → enter `cloverdigital.com`
3. Google will give you a TXT record to add to DNS. Add it at your registrar (wherever cloverdigital.com DNS lives).
4. Verify. Wait up to 24h for propagation.

### First-week actions after verification
- **Submit sitemap**: paste `https://cloverdigital.com/sitemap.xml`
- **Request indexing** for: `/`, `/for/home-services.html`, `/for/law-firms.html`, `/for/real-estate.html`, `/for/creative-agencies.html`, and every blog post.
- **Crawl stats**: check daily for first two weeks. You want to see "discovered, crawled, indexed."
- **Coverage report**: fix anything flagged "Indexed, though blocked by robots.txt" or "Discovered — currently not indexed."
- **Enhancements**: check Breadcrumb, FAQ, and Organization structured data all validate. They should — I already added them.

### Ongoing
- Weekly: check "Performance" → filter by query "clover digital" — we want to see impressions and clicks climbing, average position improving.
- Monthly: audit coverage, fix any de-indexed pages.

---

## 2. Google Business Profile (CRITICAL — already on your task board)

Task ID on prairie-fleet: `e71e1253` — "Complete Google Business Profile video verification for Clover Digital rebrand."

Steps:
1. Sign in at https://business.google.com with the Clover Workspace account
2. Find the pending Clover Digital profile (previously Prairie Digital — you migrated)
3. Complete the **video verification** — record a short video showing:
   - The physical location / business address signage OR work-in-progress (doesn't need to be a storefront, but needs to show real business activity)
   - Walking into the workspace
   - Yourself on camera briefly with verbal confirmation
4. Submit. Verification typically 3–5 business days.

Once verified:
- Fill 100% of the profile. Business description ≥ 750 characters. Categories: Business Management Consultant (primary) + Marketing Agency + IT Services.
- Add **Services**: list each of the 6 digital-employee service areas with descriptions (copy from `llms-full.txt`).
- **Hours**: 9am–5pm Mon–Fri (matches your JSON-LD).
- Upload **≥ 10 photos**: logo, office/workspace, team, anything branded. Re-upload weekly for first month (freshness signal).
- **Write first Google Post** announcing the rebrand from Prairie Digital to Clover Digital. Include keyword "Clover Digital" prominently.
- **Request reviews** from your first clients. 5 reviews = visibility threshold.

---

## 3. Bing Webmaster Tools

Bing's index powers ChatGPT web browsing, DuckDuckGo, Yahoo, and (indirectly) many AI assistants. Non-optional for GEO.

1. Go to https://www.bing.com/webmasters
2. Add site: `https://cloverdigital.com`
3. Verify (you can import from GSC once GSC is done — faster)
4. Submit sitemap
5. Use "URL Inspection" to request indexing of homepage + all key pages

---

## 4. Social Profile Claim Sprint (do in one sitting)

Claim the handle `cloverdigital` on each before a squatter does. Even if you don't post actively, claiming protects the brand and adds `sameAs` signals.

- [ ] **LinkedIn Company Page** — https://www.linkedin.com/company/setup/new/
  - Industry: Information Technology & Services OR Business Consulting & Services
  - Tagline: "Reliable digital employees for small businesses across the heartland."
  - Company size: 1–10
  - Website: https://cloverdigital.com
  - Add logo + cover photo (cover can be the OG card)
  - Post once ("We're live.") to seed the feed
- [ ] **X (Twitter)** — @cloverdigital (check availability; fallbacks: @clover_digital, @cloverdigitalllc)
- [ ] **Facebook Page** — /cloverdigital (matters less, but reserves the name)
- [ ] **Instagram** — @cloverdigital (same)
- [ ] **YouTube** — @cloverdigital (same)
- [ ] **Crunchbase** — https://www.crunchbase.com/add-new — submit Clover Digital as a new organization. Fill fully. Crunchbase is heavily weighted by AI assistants and appears in the Knowledge Graph.
- [ ] **Substack** — cloverdigital.substack.com (reserve even if you don't start a newsletter today)
- [ ] **Reddit** — u/cloverdigital
- [ ] **Bluesky** — cloverdigital.bsky.social
- [ ] **Threads** — @cloverdigital
- [ ] **GitHub Organization** — consider moving Masoncags-tech/Clover-Digital under a `@cloverdigital` org. Costs nothing, adds another `sameAs` target.

**Once these exist**, update `index.html`'s Organization schema `sameAs` array to include every live URL, and add them to `llms-full.txt` under the Company section. This is how Google builds the Knowledge Graph entity for "Clover Digital."

---

## 5. Directory Citations (NAP consistency is the key)

Every listing needs **identical** NAP (Name, Address, Phone):

```
Clover Digital LLC
Springfield, IL 62701 (or your exact address)
(217) 303-4601
hello@cloverdigital.com
https://cloverdigital.com
```

### Must-have (high authority)
- [ ] **Clutch.co** — https://clutch.co/join-us (B2B directory, AI-cited)
- [ ] **Yelp for Business** — https://biz.yelp.com
- [ ] **Better Business Bureau** — https://www.bbb.org/get-accredited (paid, but strong local signal)
- [ ] **Yellow Pages** — https://www.yellowpages.com (free basic listing)
- [ ] **Manta** — https://www.manta.com (free)

### Springfield / Illinois specific
- [ ] **Greater Springfield Chamber of Commerce** — https://www.gscc.org/join (paid membership = local authority + mention on their site)
- [ ] **Illinois Tech Association / Illinois Technology Council**
- [ ] **Springfield Business Journal** — directory + potential press
- [ ] **Enjoy Illinois business directory**
- [ ] **Springfield Convention & Visitors Bureau** (if applicable)
- [ ] **SCORE Central Illinois** — free mentorship + directory listing
- [ ] **Illinois Small Business Development Center (SBDC)**

### AI / B2B specific
- [ ] **Product Hunt** — launch Clover Digital (the page, not the service)
- [ ] **There's An AI For That** — https://theresanaiforthat.com
- [ ] **Futurepedia** — https://www.futurepedia.io
- [ ] **AI Agents Directory** — https://aiagentsdirectory.com
- [ ] **G2** — https://www.g2.com/products/new (even if no reviews yet)
- [ ] **Capterra** — https://www.capterra.com/vendors/sign-up
- [ ] **GetApp** — https://www.getapp.com (Gartner network)

Use a NAP consistency tracker spreadsheet. Every new listing, paste the same NAP verbatim.

---

## 6. Backlink & Brand Mention Strategy

Goal: 10–25 real, editorially-earned links in the first 90 days.

### Easy early wins
- [ ] Get listed on **SCORE** mentor pages (they list mentees' companies)
- [ ] Illinois **SBDC** client spotlight
- [ ] **Alumni page** at any school you attended (UIUC, etc.)
- [ ] Any **church, civic group, or local organization** you're part of — ask for a "supporter" or "member" mention
- [ ] Get friends with blogs/newsletters to write one genuine mention

### Local press angles
- **Angle 1 — rebrand story**: Prairie Digital → Clover Digital, why we changed, what we're building. Pitch to *Springfield Business Journal*, *The State Journal-Register*, *Illinois Times*.
- **Angle 2 — first client case study**: once you land & ship with a local business, write it up as a short case study + pitch as "local business uses AI to save X hours/week."
- **Angle 3 — Midwest AI**: pitch *Chicago Inno*, *Illinois Business Daily*, or *Crain's Chicago Business* as "Springfield-based founder building AI workforce for Main Street."

### Editorially-strong content
- [ ] Guest post on 2–3 Midwest business publications
- [ ] Podcast appearances (search Apple Podcasts for Springfield IL / Illinois / Midwest small business podcasts, send a short pitch)
- [ ] **HARO / Qwoted / Featured** — sign up for free, respond to queries from journalists where you have expertise (AI, small business, automation, remote work). 1–2 responses/week → steady pipeline of earned mentions.

---

## 7. AI / Generative Engine Optimization (GEO)

**What matters here:** AI assistants need to find you, understand you, and disambiguate you from other Clover Digitals.

### What's already shipped (2026-04-21)
- `llms.txt` + `llms-full.txt` with canonical definition + disambiguation vs. other Clover Digitals
- FAQ schema leading with "What is Clover Digital?"
- Founder (Mason Cagnoni) in Organization schema + standalone Person schema
- Static HTML renders full content for non-JS crawlers
- Brand-name density (Clover Digital appears in H1 area, FAQ, headers, footer)

### Test it
After DNS propagates + indexing happens:
- Ask ChatGPT (with web): "What is Clover Digital?" → expected answer mentions Springfield, Mason Cagnoni, digital employees.
- Ask Claude: same.
- Ask Perplexity: same. Watch the sources — they should include cloverdigital.com.
- Ask Gemini: same.
- Ask Bing / Copilot: same.

If any of them conflate you with another Clover Digital, check your Bing Webmaster Tools coverage, then file feedback through each product's correction interface. Most have a "report incorrect answer" flow.

### Ongoing GEO habits
- Write one blog post per month that teaches something specific (not promotional). AI assistants cite teaching content, not landing pages.
- Answer a few Quora / Reddit / Stack Exchange questions relevant to small-business automation with Clover Digital mentioned naturally in bio. This builds cited-by-humans-and-AIs signals.
- Keep `llms-full.txt` updated with new services, client industries, team members, etc.

---

## 8. Tracking & Measurement

### Week 1–2 after verifying GSC
- Impressions for "clover digital": > 0 (first signal Google is indexing)
- Average position for "clover digital": <50 (top 5 pages)

### Month 1
- Average position for "clover digital": <10 (first page)
- Google Knowledge Panel appears (may require more brand signals)

### Month 2–3
- Average position for "clover digital": 1–3 (top 3)
- Clover Digital appears in AI assistant answers without disambiguation needed

### Month 6
- Average position: 1
- Domain rating climbing (Ahrefs, Moz) as backlinks accumulate
- GBP has 5+ reviews
- Knowledge Panel live

### Tools
- **Google Search Console** — free, essential
- **Bing Webmaster Tools** — free, essential
- **Google Analytics 4** — already installed (`G-BGJBYZQXYL`)
- **Ahrefs Lite** ($29/mo) or **Moz Pro Starter** — optional but useful for backlink tracking
- **Manual SERP checks** — weekly incognito search for "clover digital" and screenshot position

---

## 9. Red Flags to Avoid

- ❌ **Buying links** or using link farms — will get you penalized
- ❌ **Keyword stuffing** beyond what's already on the site (we're at a good density)
- ❌ **Creating duplicate directory profiles with inconsistent NAP** — this actively hurts
- ❌ **Ignoring "Clover Digital LLC" vs "Clover Digital"** in citations — pick one canonical (recommended: "Clover Digital" for display, "Clover Digital LLC" for legal/registration fields only)
- ❌ **Deleting the `<div id="seo-content">` block** in `index.html` — it's what Googlebot reads on a React SPA
- ❌ **Changing the domain** — domain age compounds; stay on `cloverdigital.com`

---

## 10. Next Concrete Actions (this week)

Mason:
1. Verify domain in Google Search Console (30 min — needs DNS access)
2. Submit sitemap to GSC
3. Verify in Bing Webmaster Tools (import from GSC — 5 min)
4. Schedule GBP video verification (prairie-fleet task e71e1253)
5. Claim @cloverdigital on LinkedIn, X, Instagram, YouTube, Threads, Bluesky, Crunchbase (60 min one sitting)
6. Update `index.html` Organization `sameAs` array with the real URLs of the above

Claude Code can help with:
- Drafting the LinkedIn company description, X bio, Crunchbase listing from `llms-full.txt`
- Writing the directory-submission copy templates
- Writing one blog post per week
- Drafting press pitch emails
- Writing the Google Business Profile description
- Generating the first round of reviews-request email templates for pilot clients

---

## 11. File inventory (SEO-relevant files)

| File | Purpose |
|---|---|
| `index.html` | Homepage meta, all JSON-LD schemas, static SEO content for crawlers |
| `llms.txt` | Short AI-assistant reference (for AI crawlers that check well-known paths) |
| `llms-full.txt` | Full AI-assistant reference with disambiguation + founder + NAP |
| `sitemap.xml` | XML sitemap — 13 URLs |
| `robots.txt` | Crawl directives + hint toward llms.txt |
| `blog/*.html` | 7 blog posts, each with Article + BreadcrumbList schema |
| `for/*.html` | 4 industry landing pages (home-services, law-firms, real-estate, creative-agencies) |
| `BRAND.md` | Brand guidelines (voice, color, typography) — canonical source |
| `SEO_PLAYBOOK.md` | This file |

---

*Last updated: 2026-04-21 · Maintained by: Mason Cagnoni + Claude Code*
