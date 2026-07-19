# Juan Miguel Austria — Portfolio (React + Vite)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Notes / things to plug in yourself

- **CV file**: put your actual PDF at `public/Docs/JM_Austria_CV_Coming_Soon.pdf` (referenced by the Download CV button in `src/components/Hero.jsx`).
- **BasicBankApp.jar**: if you want the "Download App" button on that project card to work, add the file at `public/BasicBankApp (JAR)/BasicBankApp.jar`.
- **Tech stack / skill icons** are pulled live from the Devicon CDN (jsdelivr) so no local image files are needed.
- **Web3Forms** access key is already wired into the contact form (same one used on your original site).
- Content (skills, projects, education, certificates, socials) all lives in `src/data.js` — edit that file to update the site without touching component code.

## Stack

React + Vite + Tailwind CSS, icons via lucide-react (plus a few hand-made brand icons since lucide dropped social logos).
