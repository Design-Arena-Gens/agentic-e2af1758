type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-300/80">{description}</p>
      ) : null}
    </div>
  );
}
