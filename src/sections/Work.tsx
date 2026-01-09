import Section from "../components/Section";
import Card from "../components/Card";
import { site } from "../app/content";

function WorkCard({
  company,
  role,
  location,
  start,
  end,
  highlights,
  links,
}: (typeof site.workFeatured)[number]) {
  return (
    <Card>
      <div className="card__header">
        <div>
          <h3 className="h3">{role}</h3>
          <p className="muted">
            {company}
            {location ? ` • ${location}` : ""}
          </p>
        </div>
        <p className="pill">
          {start} — {end}
        </p>
      </div>

      <ul className="list">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      {links?.length ? (
        <div className="stack row wrap" style={{ marginTop: 12 }}>
          {links.map((l) => (
            <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export default function Work() {
  return (
    <Section id="work" title="Work experience" subtitle="Most relevant roles first.">
      <div className="grid">
        {site.workFeatured.map((w) => (
          <WorkCard key={`${w.company}-${w.role}-${w.start}`} {...w} />
        ))}
      </div>

      <details className="details" style={{ marginTop: 16 }}>
        <summary className="details__summary">Earlier experience</summary>
        <div className="grid" style={{ marginTop: 14 }}>
          {site.workEarlier.map((w) => (
            <WorkCard key={`${w.company}-${w.role}-${w.start}`} {...w} />
          ))}
        </div>
      </details>
    </Section>
  );
}
