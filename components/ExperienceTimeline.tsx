type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  summary: string;
  stack: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Engineer",
    company: "Orbit UI Lab",
    period: "2023 — Present",
    summary:
      "Led delivery of a multi-tenant design system, reduced build times by 35%, and introduced a React + Angular interoperability layer that cut onboarding time for cross-framework squads.",
    stack: ["React 18", "Next.js", "Storybook", "Tailwind", "Nx"]
  },
  {
    title: "Frontend Developer",
    company: "Nimbus Analytics",
    period: "2021 — 2023",
    summary:
      "Shipped accessible Angular dashboards consumed by 40k+ monthly users, automated visual regression testing, and drove the adoption of signal-based state management to eliminate race conditions.",
    stack: ["Angular 16", "RxJS", "NgRx Signals", "Jest", "PWA"]
  },
  {
    title: "Frontend Intern",
    company: "Horizon Cloud",
    period: "2020 — 2021",
    summary:
      "Built the onboarding funnel for a B2B SaaS product with React Query, implemented end-to-end telemetry, and improved conversion by 18% through A/B tested UI iterations.",
    stack: ["React", "TypeScript", "Cypress", "GraphQL"]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="relative grid gap-6 lg:grid-cols-3">
      {experiences.map((item, index) => (
        <article
          key={`${item.company}-${item.period}`}
          className="glass-panel grid-overlay relative flex flex-col gap-5 p-6"
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent/70">
            <span>{item.period}</span>
            <span>#{index + 1}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm text-brand-accent/80">@ {item.company}</p>
            <p className="text-sm leading-relaxed text-slate-300/80">
              {item.summary}
            </p>
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {item.stack.map((tech) => (
              <span
                key={`${item.company}-${tech}`}
                className="chip text-[0.7rem]"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
