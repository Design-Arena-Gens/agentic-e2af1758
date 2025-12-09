type Project = {
  name: string;
  description: string;
  metrics: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    name: "FluxOps Design System",
    description:
      "A unified component library consumed by both React and Angular squads, powered by design tokens with automatic theme synchronization and accessibility guardrails.",
    metrics: ["82 components", "12 consumer teams", "3x faster rollouts"],
    stack: ["React", "Angular", "Storybook", "Tailwind CSS", "Stitches"]
  },
  {
    name: "Telemetry Insights Platform",
    description:
      "Responsive analytics workspace with real-time collaboration, offline sync, and micro-frontend composition to orchestrate Angular dashboards inside a Next.js shell.",
    metrics: ["<200ms time-to-interact", "40k MAU", "99.9% uptime"],
    stack: ["Next.js 14", "Angular Elements", "Nx", "WebSockets", "Vitest"]
  },
  {
    name: "Journey Optimizer",
    description:
      "Experimentation toolkit that combines React experimentation widgets with Angular admin tooling, backed by feature flag automation and data-driven iteration loops.",
    metrics: ["+18% conversion", "Zero-regression releases", "CI under 6m"],
    stack: ["React", "Angular", "Playwright", "GraphQL", "Turborepo"]
  }
];

export default function ProjectShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.name}
          className="glass-panel grid-overlay flex flex-col gap-5 p-6"
        >
          <header className="space-y-2">
            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300/80">
              {project.description}
            </p>
          </header>
          <dl className="grid gap-2 rounded-2xl bg-white/[0.04] p-4 text-sm text-slate-200/90">
            {project.metrics.map((metric) => (
              <div key={`${project.name}-${metric}`} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                <dt className="font-medium">{metric}</dt>
              </div>
            ))}
          </dl>
          <footer className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span key={`${project.name}-${tech}`} className="chip text-[0.7rem]">
                {tech}
              </span>
            ))}
          </footer>
        </article>
      ))}
    </div>
  );
}
