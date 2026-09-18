import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { site } from "@/lib/site";

type Search = { paketti?: string };

export const Route = createFileRoute("/yhteystiedot")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    paketti: typeof s.paketti === "string" ? s.paketti : undefined,
  }),
  head: () =>
    pageHead(
      "Ota yhteyttä | Laatusivut",
      `Varaa ilmainen kartoitus. ${site.person}, ${site.phoneDisplay}, ${site.email}. Jyväskylä.`,
      "/yhteystiedot",
    ),
  component: Yhteystiedot,
});

function Yhteystiedot() {
  const { paketti } = Route.useSearch();
  return (
    <SiteShell>
      <main id="sisalto">
        <PageIntro
          eyebrow="Yhteystiedot"
          title="Varaa ilmainen kartoitus"
          lead="30 minuuttia puhelimitse tai videoyhteydellä. Ei velvoitetta. Saat kirjallisen hinta-arvion saman tai seuraavan arkipäivän aikana."
        />
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 lg:grid-cols-[1fr_20rem]">
          <ContactForm preset={paketti} />
          <aside className="h-fit border border-line bg-paper p-6">
            <h2 className="font-serif text-2xl">Suoraan</h2>
            <p className="mt-4 text-sm tracking-[0.12em] text-muted uppercase">Puhelin</p>
            <a href={`tel:${site.phoneTel}`} className="mt-1 block text-lg text-fg">
              {site.phoneDisplay}
            </a>
            <p className="mt-5 text-sm tracking-[0.12em] text-muted uppercase">Sähköposti</p>
            <a href={`mailto:${site.email}`} className="mt-1 block break-all text-lg text-fg">
              {site.email}
            </a>
            <p className="mt-5 text-sm tracking-[0.12em] text-muted uppercase">Paikkakunta</p>
            <p className="mt-1 text-lg">{site.city}</p>
            <p className="mt-6 text-[0.95rem] text-muted">
              {site.person}, kevytyrittäjä. Vastaan viimeistään seuraavana arkipäivänä.
            </p>
          </aside>
        </section>
      </main>
    </SiteShell>
  );
}
