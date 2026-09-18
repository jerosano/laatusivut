import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { processSteps } from "@/lib/site";

export const Route = createFileRoute("/miten-toimimme")({
  head: () =>
    pageHead(
      "Miten toimimme | Laatusivut",
      "Neljä vaihetta: kartoitus, luonnos, toteutus ja julkaisu. Hinta ja aikataulu sovitaan ennen työtä.",
      "/miten-toimimme",
    ),
  component: Miten,
});

function Miten() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Miten toimimme"
          title="Selvä järjestys. Ei yllätyksiä."
          lead="Et osta arvausta. Ensin kartoitus, sitten luonnos, sitten toteutus. Julkaistaan kun sisältö on kohdallaan."
        />
        <section className="mx-auto max-w-3xl px-5 pb-16">
          <ol className="grid gap-12">
            {processSteps.map((s) => (
              <li key={s.n} className="grid gap-3 border-t border-line pt-6 md:grid-cols-[5rem_1fr]">
                <p className="font-serif text-2xl text-brass">{s.n}</p>
                <div>
                  <h2 className="font-serif text-3xl">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="font-serif text-2xl">Mitä sinulta tarvitaan</h2>
            <p className="mt-3 text-muted">
              Päätös siitä mitä sivu myy, yhteystiedot, olemassa oleva logo jos sellainen on, ja
              kuvia jos niitä on. Tekstejä voin auttaa. Jos sisältöjä odotetaan, aikataulu odottaa
              niiden mukana.
            </p>
          </div>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
