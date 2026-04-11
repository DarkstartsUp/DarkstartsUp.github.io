# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal academic website for Xueyang Wang (Ph.D. candidate, Tsinghua University) built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployed automatically to GitHub Pages via the `deploy.yml` workflow on every push to `main`. The `gh-pages` branch is auto-generated — never edit it directly.

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

Publications are driven by `_bibliography/papers.bib` using `jekyll-scholar`. The scholar name matching in `_config.yml` identifies the author's own name for underlining:

```yaml
scholar:
  last_name: [Einstein]   # ← change to Wang
  first_name: [Albert, A.]  # ← change to Xueyang, X.
```

Supported BibTeX extra fields: `abstract`, `arxiv`, `bibtex_show`, `blog`, `code`, `doi`, `html`, `pdf`, `poster`, `preview`, `selected`, `slides`, `supp`, `video`, `website`.

- Set `selected={true}` on a paper to show it in the homepage's selected papers section.
- PDF files go in `assets/pdf/`; preview thumbnails go in `assets/img/publication_preview/`.
- Co-author profile links are populated from `_data/coauthors.yml` (keys are lowercased last names).

## News

News items in `_news/` can be either **inline** (`inline: true` in frontmatter — displayed directly on about page) or **linked** (creates a separate page). Copy an existing file and modify.

## Important _config.yml Behaviors

- `_config.yml` changes require a server restart (or re-push) to take effect; all other file changes hot-reload.
- `imagemagick.enabled: true` requires ImageMagick installed on PATH; it generates responsive WebP images from `assets/img/`.
- The `scholar` section controls publication sorting (`group_by: year`, `group_order: descending`) and author highlight matching.
