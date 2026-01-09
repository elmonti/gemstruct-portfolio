import Section from "../components/Section";
import Card from "../components/Card";
import { site } from "../app/content";

export default function Education() {
  if (!site.education?.length) return null;

  return (
    <Section id="education" title="Education" subtitle="Academic background and qualifications.">
      <div className="grid">
        {site.education.map((e) => (
          <Card key={`${e.school}-${e.program}`}>
            <h3 className="h3">{e.school}</h3>
            <p className="muted">{e.program}</p>
            <p className="pill" style={{ display: "inline-flex", marginTop: 10 }}>
              {e.start} — {e.end}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
