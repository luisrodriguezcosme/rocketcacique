# rocketcacique.com

Personal site of Luis Rodriguez Cosme — card, projects, and blog. Astro, deployed to
GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Working on it

```
npm install
npm run dev      # local preview
npm run build    # what CI runs
```

Posts live in `src/content/blog/*.md` with `title`, `description`, `date`, `pillar`
(technical, projects, career, faith) and optional `draft: true`.

## Content rule

Nothing sensitive, ever: no employer internals, no contact details beyond GitHub/LinkedIn
links. Drafting and the sensitivity checklist happen outside this repo — only approved
posts are committed, because public git history is forever.
