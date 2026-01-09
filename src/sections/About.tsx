import Section from "../components/Section";
import Card from "../components/Card";
import { site } from "../app/content";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A little context, kept simple.">
      <Card>
        <div className="prose">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Card>
    </Section>
  );
}
