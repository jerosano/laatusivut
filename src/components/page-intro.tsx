export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-5 pt-14 pb-10 md:pt-20">
      {eyebrow ? (
        <p className="text-sm tracking-[0.16em] text-muted uppercase">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 font-serif text-4xl text-fg md:text-5xl">{title}</h1>
      <div className="rule-brass mt-5" />
      <p className="mt-6 text-lg text-muted">{lead}</p>
    </header>
  );
}
