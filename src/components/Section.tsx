import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <Container>
        <header className="section__header">
          <h2 className="h2">{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
