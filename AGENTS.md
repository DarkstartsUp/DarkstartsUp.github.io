# Repository Guidelines

## Project Structure & Module Organization

This repository hosts Xueyang Wang's academic website using Jekyll and the al-folio theme.

- `_pages/`: page content; `about.md` is the homepage.
- `_news/`: announcements named `announcement_N.md`.
- `_bibliography/papers.bib`: publications rendered by `jekyll-scholar`.
- `_data/`: YAML data for social links, coauthors, venues, and CV content.
- `_includes/` and `_layouts/`: reusable Liquid partials and page templates.
- `_sass/`, `assets/css/`, and `assets/js/`: styles and browser behavior.
- `assets/img/publication_preview/`, `assets/pdf/`, and `assets/video/`: publication media.
- `_plugins/`: Ruby build extensions; `.github/workflows/`: CI and deployment.

Edit source files rather than generated `_site/` output or the deployment branch `gh-pages`.

## Build, Test, and Development Commands

Run commands from the repository root:

- `docker compose pull` then `docker compose up`: start the recommended development environment at `http://localhost:8080`.
- `bundle install`: install Ruby dependencies for a native setup.
- `bundle exec jekyll serve`: preview locally at `http://localhost:4000`.
- `bundle exec jekyll build`: generate the site in `_site/`; also used by `bin/cibuild`.
- `npm ci`: install locked formatting dependencies.
- `npx prettier --check .`: check formatting; use `npx prettier --write path/to/file` to format changed files.
- `pre-commit run --all-files`: run configured whitespace, EOF, YAML, and large-file checks when pre-commit is installed.

Native builds require ImageMagick for configured image processing. Restart the server after changing `_config.yml`.

## Coding Style & Naming Conventions

Use two-space indentation in YAML, JavaScript, and Liquid; preserve surrounding Ruby style. Save text as UTF-8 and retain Markdown YAML front matter. Prettier uses the Shopify Liquid plugin, a 150-character print width, and ES5 trailing commas; respect `.prettierignore`.

Keep BibTeX keys stable. Follow existing PDF names such as `wang2025clock.pdf`, and verify publication `preview`, `pdf`, and `video` references resolve. Copy existing announcement front matter when adding news.

## Testing Guidelines

There is no dedicated unit-test suite, test naming convention, or coverage threshold. Build the site, then inspect affected pages at desktop and mobile widths, including navigation, publication links, images, and theme switching. CI includes Lychee link checks; Axe accessibility checks can be triggered manually.

## Commit & Pull Request Guidelines

History uses short descriptive subjects such as `Update papers.bib` and `add CHI 26 papers`, without enforced Conventional Commits. Use focused commits with clear subjects. PRs should explain the change, list validation performed, link relevant issues, and include screenshots for visual changes. Follow `CONTRIBUTING.md` by opening an issue for features or bug fixes; documentation fixes may go directly to PR.
