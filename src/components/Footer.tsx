import Container from "./Container";
import { site } from "../app/content";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <p className="muted">© {new Date().getFullYear()} {site.person.name}</p>
          <div className="footer__links">
            {site.person.links.map((l) => (
              <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
            <a className="link" href="/resume.json">Resume (JSON)</a>
            <a className="link" href="/llms.txt">AI Guide</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
