import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/evasteet")({
  head: () =>
    pageHead(
      "Evästeseloste | Laatusivut",
      "Laatusivut käyttää vain välttämättömiä evästeitä. Seurantaa ei ole.",
      "/evasteet",
    ),
  component: Evasteet,
});

function Evasteet() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Evästeet"
          title="Evästeseloste"
          lead="Tällä sivustolla ei ole tilastointi- eikä markkinointievästeitä."
        />
        <article className="prose-legal mx-auto max-w-3xl px-5 pb-20">
          <h2>Välttämättömät</h2>
          <p>
            Ilmoituksen muistaminen (selaimen localStorage-avain). Ilman sitä evästeilmoitus näkyy
            joka vierailulla. Ei henkilötietoja, ei seurantaa.
          </p>
          <h2>Tilastointi ja markkinointi</h2>
          <p>
            Ei käytössä. Jos myöhemmin otan evästeettömän kävijälaskurin (esimerkiksi Plausible),
            päivitän tämän selosteen. Google Analyticsia ei käytetä.
          </p>
          <h2>Suostumus</h2>
          <p>
            Koska ei-välttämättömiä evästeitä ei ole, erillistä hyväksy/hylkää-valintaa ei tarvita.
            Voit tyhjentää selaimesi tiedot, jolloin ilmoitus näkyy uudelleen.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
