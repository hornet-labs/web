# Kegnetic website

An Astro holding page deployed to GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever a commit is pushed to `main`. It configures Astro's site URL and project-repository base path from the GitHub Actions environment, so the same source also works for an account-level `*.github.io` repository.

In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. The first deployment runs after the workflow is pushed to `main`.
