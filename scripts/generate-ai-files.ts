import fs from "node:fs";
import path from "node:path";

// Import your canonical site content (single source of truth)
import { site } from "../src/app/content";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const BASE_URL = "https://gemstruct.com";

function write(file: string, contents: string) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, file), contents, "utf8");
  console.log(`[ai] wrote ${file}`);
}

function generateLlmsTxt() {
  const lines: string[] = [];
  lines.push(`# ${site.brand?.name ?? "Gemstruct"}`);
  lines.push(`${site.meta.description}`);
  lines.push("");
  lines.push("## Canonical URL");
  lines.push(`${BASE_URL}/`);
  lines.push("");
  lines.push("## Primary profiles");
  for (const l of site.person.links) lines.push(`${l.label}: ${l.href}`);
  lines.push("");
  lines.push("## What this site contains");
  lines.push("- Work experience (featured + earlier)");
  lines.push("- Selected projects");
  lines.push("- Skills and education");
  lines.push("- Contact details");
  lines.push("");
  lines.push("## Contact");
  lines.push(`Email: ${site.person.email}`);
  lines.push("");
  return lines.join("\n");
}

function generateResumeJson() {
  // Keep it agent-friendly and stable
  return JSON.stringify(
    {
      schema: "gemstruct-resume-v1",
      brand: site.brand,
      person: site.person,
      work: {
        featured: site.workFeatured,
        earlier: site.workEarlier,
      },
      projects: site.projects,
      skills: site.skills,
      education: site.education ?? [],
      meta: site.meta,
      generatedAt: new Date().toISOString(),
      canonical: `${BASE_URL}/`,
    },
    null,
    2,
  );
}

function generateSitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc></url>
</urlset>
`;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;
}

function main() {
  write("llms.txt", generateLlmsTxt());
  write("resume.json", generateResumeJson());
  write("sitemap.xml", generateSitemapXml());
  write("robots.txt", generateRobotsTxt());
  write("profile.json", generateResumeJson());

}

main();
