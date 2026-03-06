# AGENT.md

## Project Overview

This repository is a personal academic homepage built with Jekyll on top of the `al-folio` theme.
The active site content is concentrated in a small set of directories; most of the rest is theme infrastructure.

Primary build stack:

- Ruby + Bundler + Jekyll
- `jekyll-scholar` for publications
- GitHub Actions for deployment
- Node/Prettier only for formatting

## Main Editing Entry Points

These files and folders are the main sources of truth for the live site:

- `_config.yml`
  - Site-wide identity, URL, layout toggles, plugin config, news collection settings.
- `_pages/about.md`
  - Homepage (`/`), profile intro, selected papers, latest news, social links.
- `_pages/publications.md`
  - Publications page shell. Actual entries come from `_bibliography/papers.bib`.
- `_pages/news.md`
  - News archive page. Actual news entries come from `_news/*.md`.
- `_pages/cv.md`
  - CV page template. The current file is commented out, so the CV page is not actively enabled right now.
- `_news/*.md`
  - News items rendered through the `news` collection.
- `_bibliography/papers.bib`
  - Publication metadata used by `jekyll-scholar`.
- `_data/socials.yml`
  - Social/contact links shown on the site.
- `_data/cv.yml`
  - CV structured data. Currently still contains default template content.
- `assets/img/`, `assets/pdf/`, `assets/video/`
  - Images, paper PDFs, preview thumbnails, videos referenced by content.

## Theme / Infrastructure Directories

These are important for deeper customization, but are not the first place to edit routine content:

- `_includes/`
  - Shared Liquid partials such as `news.liquid`, `selected_papers.liquid`, header/footer components.
- `_layouts/`
  - Page layout templates.
- `_sass/` and `assets/css/main.scss`
  - Styling and theme variables.
- `assets/js/`
  - Frontend behavior and optional integrations.
- `_plugins/`
  - Custom Jekyll plugins used during build.
- `.github/workflows/`
  - CI and deployment automation.

## Current Site Structure

Based on the current repository state:

- Homepage: `_pages/about.md`
- Publications: `_pages/publications.md`
- News: `_pages/news.md`
- CV: `_pages/cv.md`
  - Present as a template, but currently commented out / disabled
- 404 page: `_pages/404.md`

Important content relationships:

- Homepage news block is enabled by `news: true` in `_pages/about.md` and reads from `_news/`.
- Homepage selected papers block is enabled by `selected_papers: true` and reads entries marked `selected={true}` in `_bibliography/papers.bib`.
- Publication preview images are stored in `assets/img/publication_preview/`.
- Publication PDFs are stored in `assets/pdf/`.
- Publication videos are stored in `assets/video/`.
- The CV assets/config exist, but the CV page itself is not currently exposed because `_pages/cv.md` is commented out.

## Build and Deploy

Local development/build:

- Install Ruby gems with `bundle install`
- Serve locally with `bundle exec jekyll serve`
- Production build with `bundle exec jekyll build`

Formatting:

- Prettier is available via `npx prettier`
- `package.json` is only used for formatting dependencies, not for site build

Deployment:

- GitHub Actions workflow: `.github/workflows/deploy.yml`
- The workflow builds the site with Jekyll, runs PurgeCSS, and deploys `_site`
- The repository also contains `bin/deploy`, but CI deployment is the primary modern path

## Editing Guidance

- Preserve YAML front matter in Markdown files.
- Keep content edits focused on source files, not generated output.
- For new publications in `_bibliography/papers.bib`:
  - Keep BibTeX keys stable.
  - Ensure referenced `preview`, `pdf`, and `video` assets actually exist.
- For new news items in `_news/`:
  - Follow the existing front matter pattern (`layout`, `date`, `inline`, `related_posts`).
- Prefer updating `_config.yml`, `_data/*`, and `_pages/*` before changing theme internals.
- Avoid broad theme refactors in `_includes/`, `_layouts/`, `_sass/`, or `_plugins/` unless the task specifically requires it.

## Encoding Note

Several files currently display mojibake when read in the terminal, which strongly suggests encoding inconsistencies.
When editing text files, prefer UTF-8 and avoid accidental re-encoding of existing content.

## Practical Default Workflow For Future Agents

1. Read `_config.yml` and the relevant page/content file first.
2. If the task is content-only, edit `_pages/`, `_news/`, `_bibliography/`, `_data/`, and matching `assets/`.
3. Only inspect `_includes/`, `_layouts/`, `_sass/`, or `_plugins/` if behavior or layout changes are required.
4. If available in the environment, verify with `bundle exec jekyll build`.

## Initialization Status

This `AGENT.md` is an initialization file created after scanning the repository structure and key content/configuration entry points.
