import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { pageHead } from "@/lib/head";
import { aftercare, packages, site } from "@/lib/site";
import { cn, formatEur } from "@/lib/utils";

export const Route = createFileRoute("/hinnasto")({
  head: () =>
    pageHead(
      "Hinnasto | Laatusivut",
      `Startti alk. ${formatEur(packages[0].price)}, yrityssivusto alk. ${formatEur(packages[1].price)}. Kuusi kuukautta pieniä päivityksiä kuuluu hintaan.`,
      "/hinnasto",
    ),
  component: Hinnasto,
});

function Hinnasto() {
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Hinnasto"
          title="Hinta näkyy etukäteen."
          lead={`Kaikkiin paketteihin kuuluu ${aftercare.freeMonths} kuukautta pieniä päivityksiä julkaisusta. ${site.vatNote}`}
        />

        <section className="mx-auto max-w-6xl px-5 pb-4">
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <article
                key={p.id}
                className={cn(
                  "flex flex-col border p-7",
                  p.featured ? "border-spruce bg-dusk text-bg" : "border-line bg-bg",
                )}
              >
                {p.featured ? (
                  <p className="text-xs tracking-[0.16em] text-brass uppercase">Pääpaketti</p>
                ) : (
                  <p className="text-xs tracking-[0.16em] text-muted uppercase">{p.pages}</p>
                )}
                <h2 className="mt-2 font-serif text-3xl">{p.name}</h2>
                <p className="mt-4 font-serif text-4xl">alk. {formatEur(p.price)}</p>
                <p className={cn("mt-2 text-sm", p.featured ? "text-bg/70" : "text-muted")}>
                  {p.duration}
                </p>
                <p className={cn("mt-4", p.featured ? "text-bg/80" : "text-muted")}>{p.blurb}</p>
                <p className={cn("mt-3 text-sm", p.featured ? "text-bg/70" : "text-muted")}>{p.who}</p>
                <ul className="mt-6 grid flex-1 gap-2 text-[0.95rem]">
                  {p.items.map((item) => (
                    <li key={item} className="border-t border-current/15 pt-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/yhteystiedot"
                  search={{ paketti: p.id }}
                  className={cn(
                    buttonVariants({ variant: p.featured ? "dusk" : "primary" }),
                    "mt-8",
                  )}
                >
                  Kysy tästä paketista
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="font-serif text-3xl">Kuuden kuukauden jälkeen</h2>
          <dl className="mt-8 grid gap-6">
            <div className="border-t border-line pt-4">
              <dt className="font-medium">Pieni muutos</dt>
              <dd className="mt-1 text-muted">
                {formatEur(aftercare.smallChange)} kertana. Teksti, kuva, aukiolo, yhteystieto.
              </dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="font-medium">Tukisopimus</dt>
              <dd className="mt-1 text-muted">
                {formatEur(aftercare.monthly)} / kk. Pienet muutokset kuuluvat sopimukseen.
              </dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="font-medium">Iso muutos</dt>
              <dd className="mt-1 text-muted">
                Uusi sivu, uusi osio tai visuaalinen uusinta: aina erillinen tarjous.
              </dd>
            </div>
          </dl>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  );
}
