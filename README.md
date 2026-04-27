# 嗨咖驛站 Hika — 線上菜單

Mobile-first multilingual menu for **嗨咖驛站 Hika**, a coastal restaurant in Hualien, Taiwan. Built with React + Vite + TypeScript + Tailwind, deployed to GitHub Pages.

## Languages

- 繁體中文 (default)
- English
- 日本語
- 한국어

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # builds into dist/
npm run preview  # serves the production build locally
```

## Editing the menu

The menu data lives in two files:

- `src/data/menu-raw.ts` — simplified single-language source (the file the restaurant edits day-to-day).
- `src/data/menu-i18n.ts` — fully translated menu used by the UI. Update this whenever you change `menu-raw.ts`.

Dish photos go in `public/images/`. The filename must match the `image` field on each item; if no photo is available set `image: null` and the emoji shown next to it will be used as a fallback.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The site is served from the custom domain configured in `public/CNAME` (currently `hika.gigahertz.us`). The Vite `base` is `/` so assets load from the domain root — change it in `vite.config.ts` if you ever serve the site from a sub-path again.

In the GitHub repository settings, under **Settings → Pages**, set **Source** to **GitHub Actions** and **Custom domain** to the value in `public/CNAME`.

## Project structure

```
src/
  components/         UI components (Header, MenuCard, ItemDetailModal, ...)
  data/               menu and store data
  hooks/              language context
  types/              shared TypeScript types
public/images/        dish photos
```
