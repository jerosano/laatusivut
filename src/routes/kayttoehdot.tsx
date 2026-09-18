import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { aftercare, site } from "@/lib/site";
import { formatEur } from "@/lib/utils";

export const Route = createFileRoute("/kayttoehdot")({
  head: () =>
    pageHead(
      "Käyttöehdot | Laatusivut",
      "Toimitus, tuki, laskutus ja oikeudet Laatusivujen verkkosivutyössä.",
      "/kayttoehdot",
    ),
  component: Ehdot,
});

function Ehdot() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Ehdot"
          title="Käyttöehdot"
          lead="Nämä ehdot koskevat sivuston käyttöä ja verkkosivutyötä, jonka tilaat kartoituksen jälkeen."
        />
        <article className="prose-legal mx-auto max-w-3xl px-5 pb-20">
          <h2>Tekijä</h2>
          <p>
            {site.person}, kevytyrittäjä, {site.city}. Laskutus laskutuspalvelun kautta.
          </p>
          <h2>Hinnat ja sopimus</h2>
          <p>
            Julkiset hinnat ovat alkaen-hintoja, ALV 0 %. ALV lisätään, jos laskutuspalvelu sen
            veloittaa. Sitova hinta sovitaan kirjallisesti kartoituksen jälkeen.
          </p>
          <h2>Toimitus</h2>
          <p>
            Aikataulu alkaa, kun sovitut sisällöt on toimitettu. Viivästys sisällöissä siirtää
            julkaisua. Sivusto luovutetaan kun se vastaa sovittua rakennetta.
          </p>
          <h2>Tuki</h2>
          <p>
            Hintaan kuuluu {aftercare.freeMonths} kuukautta pieniä päivityksiä julkaisusta. Pieni
            muutos: teksti, kuva, aukiolo, yhteystieto. Uusi sivu, uusi osio tai visuaalinen
            uusinta ei ole pieni muutos.
          </p>
          <p>
            Ilmaisen jakson jälkeen pieni muutos {formatEur(aftercare.smallChange)} / kerta tai tuki{" "}
            {formatEur(aftercare.monthly)} / kk.
          </p>
          <h2>Oikeudet</h2>
          <p>
            Saat käyttöoikeuden valmiiseen sivustoon. Pidätän oikeuden näyttää työn myöhemmin
            referenssinä, ellei toisin sovita. En käytä asiakkaan liikesalaisuuksia muuhun.
          </p>
          <h2>Vastuu</h2>
          <p>
            En vastaa kolmannen osapuolen katkoksista (domain, hosting, sähköposti). Korjaan omat
            virheeni viipymättä ilmaisen tukijakson aikana.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
