import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split("/") ?? [];
const isAccountSite =
  repositoryName?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  ...(owner ? { site: `https://${owner}.github.io` } : {}),
  ...(repositoryName && !isAccountSite ? { base: `/${repositoryName}` } : {}),
});
