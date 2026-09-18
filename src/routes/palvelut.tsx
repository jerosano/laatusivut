import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { pageHead } from "@/lib/head";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/palvelut")({
  head: () =>
    pageHead(
      "Palvelut | Laatusivut",
      "Räätälöidyt yrityssivustot pk-yrityksille: rakenne, ulkoasu, toteutus, SEO, lomake ja lakisivut.",
      "/palvelut",
    ),
  component: Palvelut,
});

function Palvelut() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Palvelut"
          title="Yrityssivusto, joka näyttää teiltä."
          lead="Teen sivut alusta julkaisuun. Rakenne, ulkoasu, tekniikka ja tekstit samalta pöydältä. En myy valmista teeman kuorta."
        />

        <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-2">
          <article className="border-t border-line pt-6">
            <h2 className="font-serif text-2xl">Mitä teen</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              <li>Sivuston rakenne ja sisällön järjestys</li>
              <li>Ulkoasu yrityksesi mukaan</li>
              <li>Toteutus joka toimii puhelimessa</li>
              <li>Perus-SEO: otsikot, metat, osoitteet</li>
              <li>Yhteydenottolomake</li>
              <li>Tietosuoja, evästeet ja käyttöehdot</li>
              <li>Julkaisu ja kuuden kuukauden pienet päivitykset</li>
            </ul>
          </article>
          <article className="border-t border-line pt-6">
            <h2 className="font-serif text-2xl">Mitä en tee</h2>
            <ul className="mt-4 grid gap-2 text-muted">
              <li>Templaattia johon vaihdetaan logo</li>
              <li>Verkkokauppaa pääpalveluna</li>
              <li>Mainostoimiston “brändimanuaalia” ilman sivua</li>
              <li>Projektia jossa halutaan Wix halvemmalla</li>
            </ul>
          </article>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <h2 className="font-serif text-3xl">Näin valitset</h2>
            <p className="mt-4 text-muted">
              Startti riittää, kun tarvitset ammattimaisen läsnäolon ja yhden selkeän yhteydenoton.
              Yrityssivusto on tavallisin valinta pk-yritykselle. Kasvu, kun sivun pitää kasvaa
              artikkeleilla tai yhdellä integraatiolla.
            </p>
            <Link to="/hinnasto" className={cn(buttonVariants({ variant: "outline" }), "mt-6")}>
              Siirry hinnastoon
            </Link>
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  );
}
