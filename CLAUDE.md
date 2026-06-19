# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal academic website for Xueyang Wang (Ph.D. candidate, Tsinghua University) built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployed automatically to GitHub Pages via the `deploy.yml` workflow on every push to `main`. The `gh-pages` branch is auto-generated — never edit it directly. The live site is at `https://DarkstartsUp.github.io` (`url` in `_config.yml`).

## Repository Layout

Jekyll theme repo, so most directories follow al-folio conventions:

| Directory | Contents |
|---|---|
| `_pages/` | Top-level pages: `about.md` (homepage), `publications.md`, `cv.md`, `news.md`, `404.md` |
| `_news/` | Announcement snippets (`announcement_N.md`) shown on the about page |
| `_bibliography/` | `papers.bib` — the publication list |
| `_data/` | Structured YAML: `cv.yml`, `coauthors.yml`, `socials.yml`, `repositories.yml`, `venues.yml` |
| `_layouts/` | Page templates (`about`, `bib`, `cv`, `distill`, `page`, `post`, …) |
| `_includes/` | Reusable Liquid partials (header, footer, news, selected_papers, `cv/*`, `resume/*`) |
| `_plugins/` | Custom Ruby plugins (Google Scholar/InspireHEP citation counts, bibtex hiding, accent removal, 3rd-party download) |
| `_sass/` | Styles; theme colors live in `_themes.scss`, vendored icon fonts under `font-awesome/` and `tabler-icons/` |
| `assets/` | Static assets: `pdf/` (paper PDFs), `img/publication_preview/` (thumbnails), `video/`, `js/` (`*-setup.js` config scripts), `css/`, `json/resume.json` |
| `bin/` | Helper scripts: `cibuild`, `deploy`, `entry_point.sh` |

Theme/tooling config lives at the root: `_config.yml`, `Gemfile`, `package.json` (Prettier/PurgeCSS), `purgecss.config.js`, `requirements.txt`, `Dockerfile`, `docker-compose*.yml`. Theme docs from upstream al-folio (`INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`, `CONTRIBUTING.md`) are kept but generally not edited.

## Local Development

**Recommended (Docker):**
```bash
docker compose pull
docker compose up
# Site available at http://localhost:8080 with live reload
```

**Slim image (~100MB):**
```bash
docker compose -f docker-compose-slim.yml up
```

**Without Docker (requires Ruby + Bundler + Python):**
```bash
bundle install
bundle exec jekyll serve
# Site available at http://localhost:4000
```

**Build only (no server):**
```bash
bundle exec jekyll build
# Output in _site/
```

## Key Content Files

| What to change | Where |
|---|---|
| Site identity, settings, plugins | `_config.yml` |
| About page bio | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| News/announcements | `_news/announcement_N.md` |
| CV data | `_data/cv.yml` (or `assets/json/resume.json`) |
| Social links | `_data/socials.yml` |
| Co-author links | `_data/coauthors.yml` |
| Theme colors | `_sass/_themes.scss` |

## Publications System

Publications are driven by `_bibliography/papers.bib` using `jekyll-scholar`. The scholar name matching in `_config.yml` identifies the author's own name so it gets underlined in citations:

```yaml
scholar:
  last_name: [Einstein]     # ⚠ still the al-folio placeholder — should be Wang
  first_name: [Albert, A.]  # ⚠ still the al-folio placeholder — should be Xueyang, X.
```

> **Note:** The site identity fields near the top of `_config.yml` (`first_name: Xueyang`, `last_name: Wang`) are already set, but the `scholar:` block (~line 252) still has the Einstein/Albert placeholders. Until those are updated, Wang's name won't be highlighted in the publication list.

Supported BibTeX extra fields: `abstract`, `arxiv`, `bibtex_show`, `blog`, `code`, `doi`, `html`, `pdf`, `poster`, `preview`, `selected`, `slides`, `supp`, `video`, `website`.

- Set `selected={true}` on a paper to show it in the homepage's selected papers section.
- PDF files go in `assets/pdf/`; preview thumbnails go in `assets/img/publication_preview/`. Existing PDFs follow a `wangYYYYkeyword.pdf` naming convention matching the BibTeX cite key.
- Co-author profile links are populated from `_data/coauthors.yml` (keys are lowercased last names).

## News

News items in `_news/` can be either **inline** (`inline: true` in frontmatter — displayed directly on about page) or **linked** (creates a separate page). Copy an existing file and modify.

## Important _config.yml Behaviors

- `_config.yml` changes require a server restart (or re-push) to take effect; all other file changes hot-reload.
- `imagemagick.enabled: true` requires ImageMagick installed on PATH; it generates responsive WebP images from `assets/img/`.
- The `scholar` section controls publication sorting (`group_by: year`, `group_order: descending`) and author highlight matching.
