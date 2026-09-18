import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "laatusivut-cookie";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem(KEY, "valttamattomat");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Evästeilmoitus"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg p-4 shadow-[0_-8px_24px_rgba(28,25,21,0.08)] md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-fg">
          Käytän vain välttämättömiä evästeitä, jotta tämä ilmoitus muistetaan. En seuraa kävijöitä.
          Lue lisää <Link to="/evasteet" className="underline decoration-brass underline-offset-4">evästeselosteesta</Link>.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex min-h-11 shrink-0 items-center justify-center bg-spruce px-5 text-bg hover:bg-dusk"
        >
          Selvä
        </button>
      </div>
    </div>
  );
}
