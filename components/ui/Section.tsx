import type { ReactNode } from "react";

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-heading text-center text-accent mb-4 drop-shadow-md ${className}`}
      style={{ color: "var(--accent-color)" }}
    >
      {children}
    </h2>
  );
}

export function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />;
}

export function SectionHeader({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="text-center mb-12">
      <SectionTitle>{title}</SectionTitle>
      <SectionDivider />
      {subtitle ? <div className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</div> : null}
    </div>
  );
}
