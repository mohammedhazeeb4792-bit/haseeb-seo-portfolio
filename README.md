# Mohammed Hazeeb: SEO Portfolio

Suggested repository name: `hazeeb-seo-portfolio`

A one-page portfolio for an SEO Executive / Digital Marketing Specialist. The hero is styled as a search result, because the candidate's work is search visibility.

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For production: `npm run build && npm start`.

## Customize
All text lives in `data/content.js` (profile, case study, experience, skills, education). Components in `components/` only render that data. Colors are in `tailwind.config.js`. Dark mode follows the visitor's system setting.

## Content notes
- The 25–50% organic traffic growth is described as "reported", as in the resume. Replace it with the exact GA4 figure once confirmed.
- The resume and LinkedIn differ on the internship dates (Mar–Jun vs Apr–Jul 2025), so only "2025" is shown. The LinkedIn URL used is the one from the LinkedIn PDF.

## Structure
```
app/ (layout.js, page.js, globals.css)
components/ (Header, Hero, Section, About, CaseStudies, Experience, Skills, Education, Contact)
data/content.js
```
