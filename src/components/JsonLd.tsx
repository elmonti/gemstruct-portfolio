import { site } from "../app/content";

export default function JsonLd() {
  const baseUrl = "https://gemstruct.com";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.person.name,
    url: `${baseUrl}/`,
    email: `mailto:${site.person.email}`,
    sameAs: site.person.links?.map(l => l.href).filter(Boolean),
    jobTitle: site.person.headline,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand?.name ?? "Gemstruct",
    url: `${baseUrl}/`,
    description: site.meta.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
