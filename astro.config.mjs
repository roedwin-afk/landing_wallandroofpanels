import { defineConfig } from "astro/config";

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_wallandroofpanels/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
});