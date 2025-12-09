import Link from "next/link";
import AngularWidgetLoader from "@/components/AngularWidgetLoader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import SectionHeading from "@/components/SectionHeading";

const heroHighlights = [
  { label: "Years Shipping Interfaces", value: "3" },
  { label: "Multi-Framework Projects", value: "12" },
  { label: "Design System Coverage", value: "82 components" }
];

const skillMatrix = [
  {
    title: "React Engineering",
    summary:
      "Hooks-first architecture, server components, streaming data UX, and performance profiling.",
    stack: ["Next.js 14", "React Query", "Turbopack", "Playwright"]
  },
  {
    title: "Angular Craft",
    summary:
      "Signal-driven state, zoneless change detection, and Angular Elements for micro-frontends.",
    stack: ["Angular 17", "RxJS", "NgRx", "Nx Monorepos"]
  },
  {
    title: "Experience Ops",
    summary:
      "Component libraries, accessibility automation, design tokens, and visual regression pipelines.",
    stack: ["Storybook", "Chromatic", "Design Tokens", "Figma API"]
  }
];

const approach = [
  {
    title: "Design Systems with Guardrails",
    description:
      "Establish resilient component APIs, encode accessibility defaults, and drive zero-regression releases through automated linting and snapshot gates."
  },
  {
    title: "Framework Interop",
    description:
      "Bridge React and Angular experiences via shared tokens, custom elements, and CI pipelines that prevent drift between multi-framework squads."
  },
  {
    title: "Data-Informed Iteration",
    description:
      "Instrument every surface with telemetry, experiment responsibly, and prioritize features with measurable user impact."
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-5 pb-24 pt-16 md:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-8">
          <span className="chip text-xs tracking-[0.4em] text-brand-accent/70">
            React · Angular · Frontend Craft
          </span>
          <h1 className="text-4xl font-semibold text-white md:text-6xl md:leading-tight">
            Ava Martinez — Frontend Engineer shaping cohesive experiences across
            React and Angular.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300/85">
            3 years translating complex product requirements into performant,
            accessible, and maintainable web applications. I bridge design
            systems across frameworks, ship experimentation platforms, and turn
            collaborative rituals into velocity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:ava.martinez.frontend@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-glow transition hover:-translate-y-[1px] hover:shadow-lg hover:shadow-brand-primary/40"
            >
              Start a Project
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-brand-accent/70 hover:text-brand-accent"
            >
              View Work
            </Link>
          </div>
          <dl className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.label} className="space-y-1 text-sm">
                <dt className="text-xs uppercase tracking-[0.35em] text-brand-accent/50">
                  {item.label}
                </dt>
                <dd className="text-2xl font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="glass-panel grid-overlay flex flex-col justify-between p-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent/60">
              Snapshot
            </p>
            <ul className="space-y-4 text-sm text-slate-300/80">
              <li>
                <strong className="text-slate-100">Current mission:</strong>{" "}
                evolving a React + Angular design system powering enterprise SaaS
                dashboards.
              </li>
              <li>
                <strong className="text-slate-100">Focus:</strong> shipping
                delightful interactions by balancing motion, accessibility, and
                runtime performance.
              </li>
              <li>
                <strong className="text-slate-100">Tooling:</strong> Next.js,
                Angular Signals, Nx, Storybook, GraphQL, Playwright, Vite.
              </li>
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-brand-accent/70">
            <span>Based in Austin · Remote friendly</span>
            <span>@avamartinez</span>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Core strengths"
          title="Engineering the bridge between React and Angular teams."
          description="Modern frontend craft anchored in shared design systems, signal-driven state management, and observability-first delivery pipelines."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillMatrix.map((item) => (
            <article
              key={item.title}
              className="glass-panel grid-overlay flex flex-col gap-4 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300/80">
                {item.summary}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={`${item.title}-${tech}`} className="chip text-[0.7rem]">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects engineered for scale, clarity, and measurable outcomes."
          description="From design system foundations to complex analytics dashboards, these projects capture how I orchestrate multi-framework teams without sacrificing polish."
        />
        <ProjectShowcase />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Shaping customer journeys across product growth stages."
          description="Each role sharpened a different muscle—shipping fast, stabilizing scale, and weaving React and Angular disciplines together."
        />
        <ExperienceTimeline />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Angular in production"
          title="Signals-driven Angular diagnostics, embedded inside a React shell."
          description="This live widget visualizes delivery health using Angular signals and zoneless change detection, proving how Angular components can live harmoniously in React experiences."
        />
        <AngularWidgetLoader />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Operating system"
          title="Principles steering every engagement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {approach.map((item) => (
            <article
              key={item.title}
              className="glass-panel grid-overlay flex flex-col gap-4 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel grid-overlay flex flex-col gap-6 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent/70">
          Let&apos;s collaborate
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Have a product to ship, a design system to scale, or a dashboard to
          modernize?
        </h2>
        <p className="mx-auto max-w-2xl text-base text-slate-300/80">
          I value teams that care about resilience, clarity, and inclusive
          experiences. Let&apos;s iterate on ideas, prototype fast, and deliver
          with purpose.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:ava.martinez.frontend@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-primary/40"
          >
            Schedule a call
          </Link>
          <Link
            href="https://www.linkedin.com/in/ava-martinez"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-brand-accent/70 hover:text-brand-accent"
          >
            LinkedIn
          </Link>
        </div>
      </section>
      <footer className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400/60">
        <span>© {new Date().getFullYear()} Ava Martinez</span>
        <span>React · Angular · Design Systems</span>
      </footer>
    </main>
  );
}
