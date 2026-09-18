import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { pageHead } from "@/lib/head";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/kiitos")({
  head: () =>
    pageHead(
      "Viesti lähti | Laatusivut",
      "Kiitos viestistä. Palaan viimeistään seuraavana arkipäivänä.",
      "/kiitos",
    ),
  component: Kiitos,
});

function Kiitos() {
  return (
    <SiteShell>
      <main id="sisalto" className="mx-auto max-w-2xl px-5 py-24">
        <p className="text-sm tracking-[0.16em] text-muted uppercase">Kiitos</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">Viesti lähti.</h1>
        <div className="rule-brass mt-5" />
        <p className="mt-6 text-lg text-muted">
          Palaan viimeistään seuraavana arkipäivänä. Jos asia on kiireellinen, soita {site.phoneDisplay}.
        </p>
        <Link to="/" className={cn(buttonVariants(), "mt-8")}>
          Etusivulle
        </Link>
      </main>
    </SiteShell>
  );
}
