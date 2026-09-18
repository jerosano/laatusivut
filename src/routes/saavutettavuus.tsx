import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { site } from "@/lib/site";

export const Route = createFileRoute("/saavutettavuus")({
  head: () =>
    pageHead(
      "Saavutettavuusseloste | Laatusivut",
      "Laatusivut tavoittelee WCAG 2.2 AA -tasoa. Ilmoita esteistä suoraan.",
      "/saavutettavuus",
    ),
  component: Saavutettavuus,
});

function Saavutettavuus() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Saavutettavuus"
          title="Saavutettavuusseloste"
          lead="Tavoite on WCAG 2.2 AA. Tämä sivu on uusi; puutteet korjataan kun ne tulevat tietoon."
        />
        <article className="prose-legal mx-auto max-w-3xl px-5 pb-20">
          <h2>Mitä on huomioitu</h2>
          <ul>
            <li>Otsikkohierarkia ja semanttinen rakenne</li>
            <li>Näppäimistö ja näkyvä kohdistus</li>
            <li>Riittävä kontrastitaso leipätekstissä ja painikkeissa</li>
            <li>Kuvien vaihtoehtoiset tekstit</li>
            <li>Lomakevirheet tekstinä, ei pelkkänä värinä</li>
          </ul>
          <h2>Tunnetut rajoitteet</h2>
          <p>
            Koristeellinen messinkiviiva ei ole tekstikontrastia. Jotkin valokuvat ovat
            atmosfäärisiä; niissä on lyhyt alt-teksti. Jos käytät ruudunlukijaa ja jokin kohta
            estää, kerro siitä.
          </p>
          <h2>Palaute</h2>
          <p>
            {site.email} tai {site.phoneDisplay}. Vastaan viimeistään seuraavana arkipäivänä.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
