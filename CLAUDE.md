# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Taylor Sturtz's personal portfolio site (v3), built with SvelteKit + TypeScript + Vite, deployed to Netlify. Older versions live at github.com/tsturtz/taylorsturtz-dot-com-v2 and -v1.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build (Netlify runs this via `netlify.toml`, publishing the `build` directory)
- `npm run preview` — preview the production build
- `npm run check` — sync SvelteKit types and type-check with `svelte-check`
- `npm run check:watch` — same, in watch mode
- `npm run test:unit` — run Vitest (`vitest`); pass a filename/pattern to run a subset, e.g. `npm run test:unit -- src/index.test.ts`
- `npm run lint` — Prettier check + ESLint
- `npm run format` — Prettier write

## Architecture

- **Single-page site**: nearly the entire page is one large component, `src/routes/+page.svelte`. It imports dozens of SVG/PNG/GIF/MP4 assets from `src/lib/images/` and tech-stack icons from `src/lib/components/Icons/devicons/` directly at the top of the `<script>` block. When adding a new skill icon or project image, follow this same pattern (import the asset, add a corresponding SVG component under `Icons/devicons/` if it's a new tech icon).
- **`/resume` route** (`src/routes/resume/+page.server.ts`) is just a 302 redirect to `https://v2.taylorsturtz.com/resume` — the old v2 site still serves the resume page.
- **Components** (`src/lib/components/`): mostly presentational/decorative SVG wrapper components (`Bicycle`, `Ramen`, `Tea`, `PaperPlane`, `PassportStamps/*`, etc.) used to illustrate the "about" section, plus reusable UI bits (`Button`, `Tooltip`, `Lightbox`, `CopyToClipboard`, `CrtEffect`).
- **`App/Showcase.svelte` + `App/ShowcaseBox.svelte`**: the projects/portfolio showcase grid, driven by demo assets in `src/lib/images/demos/`.
- **Styling**: global SCSS in `src/lib/scss/` (`global.scss`, `_variables.scss`, `_mixins.scss`), auto-injected into every component via `additionalData` in `vite.config.ts` (no need to `@import` variables/mixins manually in `.svelte` files).
- **Netlify Functions** (`netlify/functions/`): serverless proxy endpoints for a chatbot backend hosted on Hugging Face Spaces (`tsturtz-portfolio-chatbot.hf.space`), authenticated with `HUGGINGFACE_ACCESS_TOKEN` (set in `.env` locally, and in Netlify env vars in prod):
  - `post-chatbot-prompt.js` — proxies chat prompts to `/prompt`
  - `get-chatbot-health.js` — proxies health checks to `/health`
- **Adapter**: uses `@sveltejs/adapter-netlify`; deploy config is in `netlify.toml` (build command `npm run build`, publish dir `build`, functions dir `netlify/functions`).

## Conventions

- Formatting: tabs, single quotes, no trailing commas, 100 print width (see `.prettierrc`). Run `npm run format` rather than hand-formatting.
- Do not run `npm run dev` — the user runs the dev server themselves. Use `npm run check` / `npm run build` to verify changes instead.
- Do not use emdashes.
