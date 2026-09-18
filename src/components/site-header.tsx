import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-line bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="group flex flex-col" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl leading-none text-fg">{site.name}</span>
          <span className="mt-1 text-xs tracking-[0.14em] text-muted uppercase">{site.city}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Päävalikko">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.95rem] text-fg/80 hover:text-fg"
              activeProps={{ className: "text-spruce" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/yhteystiedot" className={cn(buttonVariants({ variant: "primary" }), "text-[0.95rem]")}>
            Varaa kartoitus
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobiilivalikko"
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" strokeWidth={1.6} /> : <Menu className="size-6" strokeWidth={1.6} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobiilivalikko"
          className="border-t border-line bg-bg px-5 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobiilivalikko">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center text-lg text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/yhteystiedot"
              className={cn(buttonVariants({ variant: "primary" }), "mt-3 w-full")}
              onClick={() => setOpen(false)}
            >
              Varaa kartoitus
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
