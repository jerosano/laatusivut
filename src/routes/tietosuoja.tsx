import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { site } from "@/lib/site";

export const Route = createFileRoute("/tietosuoja")({
  head: () =>
    pageHead(
      "Tietosuojaseloste | Laatusivut",
      "Rekisterinpitäjä Jere Karvinen. Miten yhteydenottotietoja käsitellään.",
      "/tietosuoja",
    ),
  component: Tietosuoja,
});

function Tietosuoja() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Tietosuoja"
          title="Tietosuojaseloste"
          lead="Tämä seloste täyttää GDPR 13 artiklan vaatimukset yhteydenottojen käsittelystä."
        />
        <article className="prose-legal mx-auto max-w-3xl px-5 pb-20">
          <h2>Rekisterinpitäjä</h2>
          <p>
            {site.person}, kevytyrittäjä, {site.city}. Sähköposti {site.email}, puhelin{" "}
            {site.phoneDisplay}.
          </p>
          <h2>Mitä tietoja kerään</h2>
          <p>
            Yhteydenottolomakkeella: nimi, sähköposti, puhelin, yritys (vapaaehtoinen), viesti ja
            mahdollinen paketitoive. Puhelimessa tai sähköpostissa kerrotut tiedot samassa
            tarkoituksessa.
          </p>
          <h2>Miksi ja millä perusteella</h2>
          <ul>
            <li>Yhteydenottoon vastaaminen ja tarjouksen laatiminen: sopimusta edeltävät toimet (6.1.b).</li>
            <li>Asiakassuhteen hoitaminen, jos työ tilataan: sopimus (6.1.b).</li>
            <li>Kirjanpitoon liittyvä säilytys tarvittaessa: lakisääteinen velvoite (6.1.c).</li>
          </ul>
          <h2>Säilytys</h2>
          <p>
            Tarjouspyynnöt enintään 24 kuukautta, ellei sopimus synny. Sopimuksen tiedot
            asiakassuhteen ja kirjanpitovelvollisuuden ajan.
          </p>
          <h2>Luovutukset</h2>
          <p>
            En myy tietoja. Laskutus voi kulkea laskutuspalvelun kautta, jos työ tilataan. Sivuston
            tekninen alusta voi käsitellä palvelimen lokeja. En käytä mainonnan seurantaa.
          </p>
          <h2>Oikeutesi</h2>
          <p>
            Voit pyytää tarkastusta, oikaisua, poistoa, rajoitusta ja vastustaa käsittelyä. Voit
            tehdä valituksen Tietosuojavaltuutetun toimistolle (tietosuoja.fi).
          </p>
          <h2>Evästeet</h2>
          <p>Ks. erillinen evästeseloste.</p>
        </article>
      </main>
    </SiteShell>
  );
}
