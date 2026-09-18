import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { site } from "@/lib/site";

export const Route = createFileRoute("/minusta")({
  head: () =>
    pageHead(
      "Minusta | Laatusivut",
      `${site.person}, kevytyrittäjä Jyväskylästä. Teen yrityssivut itse, alusta julkaisuun.`,
      "/minusta",
    ),
  component: Minusta,
});

function Minusta() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow={site.city}
          title={site.person}
          lead="Teen sivut itse. En ole toimisto enkä tiimi. Jos vastaat tähän sivuun, vastaat minulle."
        />
        <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-16 md:grid-cols-2">
          <div className="grid gap-5 text-muted">
            <p>
              Laatusivut on nimeni alla tehtävää työtä: yrityssivustoja suomalaisille
              pk-yrityksille. Toimin kevytyrittäjänä. Laskutus kulkee laskutuspalvelun kautta.
            </p>
            <p>
              En myy templaattia johon vaihdetaan logo. En ota projekteja, joissa halutaan “jotain
              samanlaista kuin Wix mutta halvemmalla”. Jos hinta, aikataulu ja jälki pitää olla
              selvillä etukäteen, olemme samalla sivulla.
            </p>
            <p>
              Tämä sivusto on ensimmäinen julkinen näyte. Referenssejä lisätään sitä mukaa kun niitä
              syntyy — ei keksittyjä asiakaslainauksia.
            </p>
          </div>
          <figure>
            <img
              src="/images/vedokset.webp"
              alt="Vedoksia ja työvälineitä paperipöydällä"
              width={1400}
              height={933}
              className="w-full rounded-sm object-cover"
            />
          </figure>
        </section>
        <CtaBand title="Puhutaan sivustostasi" />
      </main>
    </SiteShell>
  );
}
