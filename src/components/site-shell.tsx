import type { ReactNode } from "react";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <a href="#sisalto" className="skip-link">
        Siirry sisältöön
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <CookieNotice />
    </div>
  );
}
