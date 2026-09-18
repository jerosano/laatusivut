import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CtaBand({
  title = "Varaa ilmainen kartoitus",
  text = "30 minuuttia. Ei velvoitetta. Saat kirjallisen hinta-arvion saman tai seuraavan arkipäivän aikana.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-spruce text-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-bg/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/yhteystiedot" className={cn(buttonVariants({ variant: "dusk" }))}>
            Varaa kartoitus
          </Link>
          <a href={`tel:${site.phoneTel}`} className={cn(buttonVariants({ variant: "outline" }), "border-bg/40 text-bg hover:bg-dusk")}>
            Soita {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
