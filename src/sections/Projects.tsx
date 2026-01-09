import Section from "../components/Section";
import Card from "../components/Card";
import Tag from "../components/Tag";
import { site } from "../app/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I’ve built or am building.">
      <div className="grid">
        {site.projects.map((p) => (
          <Card key={p.name}>
            <h3 className="h3">{p.name}</h3>
            <p className="muted">{p.description}</p>

            <div className="stack row wrap" style={{ marginTop: 10 }}>
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {p.links?.length ? (
              <div className="stack row wrap" style={{ marginTop: 12 }}>
                {p.links.map((l) => (
                  <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
