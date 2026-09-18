import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export function NotFound() {
  return (
    <SiteShell>
      <main id="sisalto" className="mx-auto flex max-w-3xl flex-col gap-6 px-5 py-24">
        <p className="text-sm tracking-[0.16em] text-muted uppercase">404</p>
        <h1 className="font-serif text-4xl text-fg md:text-5xl">Tätä sivua ei ole.</h1>
        <p className="max-w-md text-muted">
          Osoite on väärä tai sivu on siirretty. Palaa etusivulle tai varaa kartoitus, jos etsit
          tekijää sivustolle.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center bg-spruce px-5 text-bg hover:bg-dusk"
          >
            Etusivulle
          </Link>
          <Link
            to="/yhteystiedot"
            className="inline-flex min-h-11 items-center border border-spruce px-5 text-spruce hover:bg-paper"
          >
            Varaa kartoitus
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
