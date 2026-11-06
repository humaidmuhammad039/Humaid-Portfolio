# HUMAID — THE SERIES

A cinematic, streaming-inspired portfolio for **Humaid Muhammad**: BS Computer Systems Engineering student at UET Peshawar (Class of 2028), aspiring cloud engineer. Every section is an episode, every project is an Original.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

Built on the open structure of the "Portfolio_series" reference project (React 18, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Lenis). All content, photo, copy and branding are Humaid's.

## Run locally
Requires Node.js 18+.

```
npm install
npm run dev
```

Production build: `npm run build` (output in `dist/`).

## Update content
Everything lives in **`src/data/portfolio.ts`**: profile, education, experience, projects, achievements, certifications, skills, seasons (journey), top picks and the intro reel.

- Resume: replace `public/assets/Humaid_Muhammad_Resume.pdf`.
- Photo: replace `photo.jpg` (original) and `cutout.png` (background removed, same framing), then run `npm run images`.
- Project repo links: add `github: 'https://github.com/humaidmuhammad039/<repo>'` to a project and a GitHub button appears.

## Deploy for free (GitHub + Vercel)
1. Create a new repository on GitHub (for example `humaid-the-series`) and push this folder:
   ```
   git init
   git add .
   git commit -m "Humaid — The Series"
   git branch -M main
   git remote add origin https://github.com/humaidmuhammad039/humaid-the-series.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub (free Hobby plan), click **Add New → Project**, and import the repository.
3. Vercel detects Vite automatically. Build command `npm run build`, output directory `dist`. Click **Deploy**.
4. You get a free URL like `humaid-the-series.vercel.app`. Rename it under Project → Settings → Domains if you want a cleaner one.

Every `git push` to `main` redeploys automatically.
