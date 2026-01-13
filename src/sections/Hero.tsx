import Container from "../components/Container";
import { site } from "../app/content";
import SlotText from "../components/SlotText";

export default function Hero() {

  return (
    <section id="top" className="hero">
      <Container>
        <div className="hero__grid">
          <div>
            <p className="eyebrow">{site.person.location.name} {site.person.location.continent && ` · ${site.person.location.continent}`}</p>

            <h1 className="h1">{site.brand.name}</h1>

            <p className="lead">
              I’m {site.person.name}, a software developer based in {site.person.location.name}. I build fast, reliable interfaces backed by clean, maintainable systems.
            </p>

            <p className="tagline" style={{ marginTop: 10, minHeight: 24 }}>
              <span className="taglineDot" aria-hidden="true" />
              <SlotText items={site.brand.taglineRotating} intervalMs={3200} spinMs={900} />
            </p>

            <div className="stack row" style={{ marginTop: 14 }}>
              <a className="btn" href="#work">View work</a>
              <a className="btn btn--ghost" href={`mailto:${site.person.email}`}>
                Get in touch
              </a>
            </div>

            <div className="stack row wrap heroLinks" style={{ marginTop: 14 }}>
              {site.person.links.map((l) => (
                <a
                  key={l.href}
                  className="link"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero__card card">
            <div className="hero__avatar">
              <img src="/gemstruct.svg"/>
            </div>
            <div>
              <p className="muted">Gemstruct</p>
              <p className="strong">
                Selected projects and experiments.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
