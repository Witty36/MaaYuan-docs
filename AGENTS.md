# Repository Guidelines

## Project Structure & Module Organization

This repository hosts the MaaYuan Chinese documentation site using VitePress and Vue.

- `zh/`: Markdown pages grouped into `Started/`, `Manual/`, `Features/`, `FAQ/`, `Activity/`, and `Developer/`.
- `.vitepress/config.mjs`: site configuration, navigation, sidebar, and routing. `zh/` pages are rewritten to root URLs: `zh/Started/Install.md` becomes `/Started/Install`.
- `.vitepress/theme/`: Vue components and CSS; `.vitepress/shared/` contains shared data and helpers.
- `public/`: static images, icons, and contributor portraits.
- `scripts/`: release-note synchronization, Wiki export, image upload, and deployment utilities.
- `tests/`: Node.js and Python regression tests; `.github/workflows/` contains automation.

## Build, Test, and Development Commands

Use Node.js 24 and pnpm 9 to match CI. Run commands from the repository root:

- `pnpm install --frozen-lockfile`: install locked dependencies.
- `pnpm docs:dev`: start the development server with network binding.
- `pnpm docs:build`: generate `.vitepress/dist/` and copy the Vercel configuration.
- `pnpm docs:preview`: preview the generated site.
- `pnpm test`: run `tests/*.test.mjs` using Node's built-in test runner.
- `python3 -m unittest discover -s tests -p 'test_*.py'`: run Python tests.

## Coding Style & Naming Conventions

Write documentation in Simplified Chinese. Preserve existing page names, anchors, and directory conventions; update navigation when adding pages. Use PascalCase Vue component filenames and camelCase JavaScript identifiers. Follow surrounding formatting: generally two-space indentation for JavaScript, Vue, and CSS, and four spaces for Python. Quotes and semicolons vary; avoid unrelated formatting changes. No dedicated lint or formatting command is configured.

## Testing Guidelines

Add focused regression tests for changed helpers or scripts using `node:test` or Python `unittest`. Name files `*.test.mjs` or `test_*.py` under `tests/`. No coverage threshold is configured. Build documentation changes and inspect affected pages, images, links, and mobile layouts. The site enables `ignoreDeadLinks`, so a successful build does not validate links.

## Commit & Pull Request Guidelines

History mixes plain `Update …` messages with `chore:`, `fix:`, `feat:`, and scoped messages such as `fix(ci):`. Prefer `<type>(scope): <简短中文动词短语>`, omitting scope when unnecessary. Keep changes focused. PR descriptions should explain the change, link relevant issues, report validation, and include screenshots for visible UI changes. Keep credentials in environment variables or GitHub secrets; do not commit generated build output.
