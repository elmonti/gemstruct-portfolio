import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { site } from "../app/content";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  return (
    <header className="nav">
      <Container>
        <div className="nav__inner">
          <a className="nav__brand" href="#top">
            {site.brand.name ?? site.person.name}
          </a>

          <nav className="nav__links" aria-label="Primary">
            {nav.map((i) => (
              <a key={i.href} className="nav__link" href={i.href}>
                {i.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </Container>
    </header>
  );
}
