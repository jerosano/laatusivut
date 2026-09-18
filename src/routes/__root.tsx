import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { JsonLd } from "@/components/json-ld";
import { NotFound } from "@/components/not-found";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

const APP_NAME = "Laatusivut";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#palvelu`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phoneTel,
      areaServed: "FI",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: "FI",
      },
      founder: { "@id": `${site.url}/#jere` },
      priceRange: "€€",
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#jere`,
      name: site.person,
      jobTitle: "Verkkosivusuunnittelija",
      email: site.email,
      telephone: site.phoneTel,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: "FI",
      },
    },
  ],
};

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#2C3B32" },
      { name: "author", content: site.person },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="fi" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg font-sans">
        <PreviewHostBridge />
        <JsonLd data={schema} />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
