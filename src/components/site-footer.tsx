import { Link } from "@tanstack/react-router";
import { legalNav, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-dusk text-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-bg/75">
            Yrityssivut pk-yrityksille. {site.person}, kevytyrittäjä, {site.city}.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-brass uppercase">Sivut</p>
          <ul className="mt-3 grid gap-2 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-bg/85 hover:text-bg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/yhteystiedot" className="text-bg/85 hover:text-bg">
                Yhteystiedot
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-brass uppercase">Yhteys</p>
          <ul className="mt-3 grid gap-2 text-[0.95rem]">
            <li>
              <a href={`tel:${site.phoneTel}`} className="text-bg/85 hover:text-bg">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-bg/85 hover:text-bg">
                {site.email}
              </a>
            </li>
            <li className="text-bg/75">{site.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bg/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-bg/65 md:flex-row md:items-center md:justify-between">
          <p>
            {site.person} · kevytyrittäjä · {site.city}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {legalNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-bg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
