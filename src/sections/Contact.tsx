import Section from "../components/Section";
import Card from "../components/Card";
import { site } from "../app/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Fastest way to reach me.">
      <Card>
        <p className="lead" style={{ marginTop: 0 }}>
          Email:{" "}
          <a className="link" href={`mailto:${site.person.email}`}>
            {site.person.email}
          </a>
        </p>
        <div className="stack row wrap">
          {site.person.links.map((l) => (
            <a key={l.href} className="btn btn--ghost" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </Card>
    </Section>
  );
}
