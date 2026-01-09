import Section from "../components/Section";
import Card from "../components/Card";
import { site } from "../app/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools I use often and ship with.">
      <div className="grid grid--3">
        {site.skills.map((s) => (
          <Card key={s.group}>
            <h3 className="h3">{s.group}</h3>
            <ul className="list">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
