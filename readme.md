# sahil-sahu.github.io

Personal portfolio. Astro, no UI framework, no CSS framework. Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Edit content (no component changes needed)

| File | What |
|---|---|
| `src/content/site.json` | Name, pitch, links, resume path, education, footer, "off the clock" |
| `src/content/experience.json` | Jobs and bullets |
| `src/content/projects/*.md` | One card per file; `order` sorts, `featured` makes it the big orange card |
| `src/content/skills.json` | Skill groups |

Any value starting with `TODO(` renders as a yellow placeholder on the site. `grep -rn "TODO(" src`
lists what's still missing.

## Run

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node >= 22.22.
