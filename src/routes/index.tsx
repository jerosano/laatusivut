import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { pageHead } from "@/lib/head";
import { faqs, packages, processSteps, site } from "@/lib/site";
import { cn, formatEur } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Laatusivut — yrityssivut, joista ei tarvitse selitellä",
      "Teen pk-yrityksille sivustot, joista hinta, aikataulu ja jälki ovat selvillä etukäteen. Jere Karvinen, Jyväskylä.",
      "/",
    ),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <main id="sisalto">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm tracking-[0.16em] text-muted uppercase">
              {site.name} · {site.city}
            </p>
            <h1 className="mt-4 font-serif text-4xl text-fg md:text-6xl">
              Sivut, jotka näyttävät yritykseltäsi.
            </h1>
            <div className="rule-brass mt-6" />
            <p className="mt-6 max-w-md text-lg text-muted">
              Teen pk-yrityksille sivustot, joista hinta, aikataulu ja jälki ovat selvillä etukäteen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/yhteystiedot" className={cn(buttonVariants())}>
                Varaa ilmainen kartoitus
              </Link>
              <Link to="/hinnasto" className={cn(buttonVariants({ variant: "outline" }))}>
                Katso hinnat
              </Link>
            </div>
          </div>
          <figure>
            <img
              src="/images/studio.webp"
              alt="Työpöytä, paperia ja messinkiviivain suomalaisessa studiossa"
              width={1600}
              height={900}
              className="h-auto w-full rounded-sm object-cover"
            />
          </figure>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl">Kenelle</h2>
              <p className="mt-4 text-muted">
                Yrittäjälle, joka haluaa sivun joka näyttää siltä miltä yritys oikeasti on. Hinta
                näkyy. Aikataulu pitää. Jälki kestää.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl">Kenelle ei</h2>
              <p className="mt-4 text-muted">
                Jos etsit valmista templaattia johon vaihdetaan logo, tai halvinta mahdollista
                sivua. Silloin en ole oikea tekijä.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-3xl md:text-4xl">Mitä saat</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              {
                n: "01",
                t: "Rakenne joka ohjaa yhteydenottoon",
                d: "Jokaisella sivulla on selvä seuraava askel. Ei arvailua, ei piilotettuja lomakkeita.",
              },
              {
                n: "02",
                t: "Ulkoasu joka on teidän",
                d: "Ei teeman logo-vaihtoa. Typografia, väri ja sommittelu rakennetaan yrityksesi mukaan.",
              },
              {
                n: "03",
                t: "Tekniikka joka on nopea",
                d: "Kevyt toteutus, toimii puhelimessa, hakukoneelle selkeä rakenne.",
              },
              {
                n: "04",
                t: "Kuusi kuukautta pieniä päivityksiä",
                d: "Tekstit, kuvat ja yhteystiedot kuuluvat hintaan julkaisun jälkeen.",
              },
            ].map((item) => (
              <li key={item.n} className="border-t border-line pt-5">
                <p className="font-serif text-sm text-brass">{item.n}</p>
                <h3 className="mt-2 font-serif text-2xl">{item.t}</h3>
                <p className="mt-2 text-muted">{item.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-dusk">
          <img
            src="/images/jarvi.webp"
            alt="Kuusirantainen järvi hämärässä Keski-Suomessa"
            width={1600}
            height={900}
            className="max-h-[28rem] w-full object-cover"
            loading="lazy"
          />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-4xl">Miten työ etenee</h2>
            <Link
              to="/miten-toimimme"
              className="inline-flex items-center gap-2 text-spruce hover:underline"
            >
              Koko prosessi <ArrowRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <li key={s.n}>
                <p className="font-serif text-sm text-brass">{s.n}</p>
                <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-serif text-3xl md:text-4xl">Hinnat</h2>
              <Link to="/hinnasto" className="inline-flex items-center gap-2 text-spruce hover:underline">
                Avaa hinnasto <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-px bg-line md:grid-cols-3">
              {packages.map((p) => (
                <li
                  key={p.id}
                  className={cn("flex flex-col bg-bg p-7", p.featured && "bg-dusk text-bg")}
                >
                  <p className={cn("text-sm tracking-[0.12em] uppercase", p.featured ? "text-brass" : "text-muted")}>
                    {p.featured ? "Pääpaketti" : p.pages}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
                  <p className="mt-4 font-serif text-3xl">
                    alk. {formatEur(p.price)}
                  </p>
                  <p className={cn("mt-3 flex-1 text-[0.95rem]", p.featured ? "text-bg/75" : "text-muted")}>
                    {p.blurb}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">{site.vatNote}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Minusta</h2>
            <p className="mt-5 text-muted">
              Olen {site.person}. Teen sivut itse, Jyväskylästä. En myy templaattia enkä piilota
              hintaa. Jos haluat sivun josta ei tarvitse selitellä, soita tai jätä viesti.
            </p>
            <Link
              to="/minusta"
              className="mt-5 inline-flex items-center gap-2 text-spruce hover:underline"
            >
              Lue lisää <ArrowRight className="size-4" />
            </Link>
          </div>
          <figure>
            <img
              src="/images/vedokset.webp"
              alt="Paperivedoksia ja kynä työpöydällä"
              width={1400}
              height={933}
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
          </figure>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-serif text-3xl">Usein kysyttyä</h2>
              <Link to="/ukk" className="text-spruce hover:underline">
                Kaikki kysymykset
              </Link>
            </div>
            <dl className="mt-8 grid gap-8">
              {faqs.slice(0, 3).map((f) => (
                <div key={f.q} className="border-t border-line pt-5">
                  <dt className="font-serif text-xl">{f.q}</dt>
                  <dd className="mt-2 text-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  );
}
