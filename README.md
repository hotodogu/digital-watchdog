# Digital Watchdog

A project built with Next.js App Router, React, TypeScript and Tailwind CSS. Production address: [https://digitalwatchdog.ayonyuan.com](https://digitalwatchdog.ayonyuan.com)

## Local development

Use Node.js 24 (see `.nvmrc`). With nvm installed, run `nvm use`.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.tsx` to update the homepage.

## Project structure

- `src/app/`: pages, shared layout, metadata, global styles and 404 page.
- `src/components/`: reusable React components.
- `src/content/`: research content and structured data.
- `public/images/`: images and SVGs, referenced as `/images/filename.svg`.
- `.github/workflows/deploy.yml`: validation and GitHub Pages deployment.

The site includes a responsive navy and teal layout, four educational scam guides, an online safety checklist, external support pathways, a resource directory and an About page. A project-only notice and disclaimer appear throughout. The pamphlet download is pending the finished file.

Graphics use open-source Lucide SVG icons and CSS illustrations. Licence notices are included in `public/icon-licenses.txt`. Content and source links are maintained in `src/content/site.ts`; external sources should be rechecked before future updates.

## Validate and build

```sh
npm run check
```

This runs ESLint, TypeScript and the production build. The static website is exported to `out/`.
To preview that output, run `python3 -m http.server 3000 --directory out` and open [http://localhost:3000](http://localhost:3000).
Do not use `next start` for this static export.

## First deployment

1. Commit and push this skeleton to `main` in `hotodogu/digital-watchdog`.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. Set the custom domain to `digitalwatchdog.ayonyuan.com` in Pages settings.
4. At the DNS provider for `ayonyuan.com`, add a **CNAME** record named `digitalwatchdog` pointing to `hotodogu.github.io` (no protocol or repository path). Replace a conflicting record at that exact subdomain if necessary; leave the apex domain and other subdomains alone.
5. Run the **Deploy to GitHub Pages** workflow from the Actions tab if the initial run needs retrying after Pages is enabled.
6. After GitHub verifies DNS and provisions the certificate, enable **Enforce HTTPS**.
7. Check the homepage, a direct page URL and an unknown URL on the live domain.

Domain verification in your GitHub account is recommended before connecting DNS. GitHub's instructions:
[https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

A custom Actions deployment uses the domain in Pages settings; it does not require a repository CNAME file.
The site assumes it is served at the root of the custom subdomain, so no repository `basePath` is configured.
The default `hotodogu.github.io/digital-watchdog/` URL is not the intended standalone deployment target.

Every push to `main` validates and publishes the website. Pull requests validate without publishing.
The first deployment requires the repository to be eligible for GitHub Pages under your GitHub plan.

## Static hosting constraints

Next.js uses `output: "export"` and trailing slashes for directory-based URLs.
React interactions, SVGs, charts and Canvas can run in the browser. Any dynamic routes must have their paths generated at build time.
GitHub Pages does not run a backend: request-time rendering, Server Actions, private API secrets and runtime API endpoints require a separate service.
Images use unoptimised delivery because the Next.js image optimisation server is unavailable; compress and resize assets before adding them.
Never commit credentials or put secrets in browser code. Environment files are ignored by Git.

## Deployment references

- [https://nextjs.org/docs/app/guides/static-exports](https://nextjs.org/docs/app/guides/static-exports)
- [https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

