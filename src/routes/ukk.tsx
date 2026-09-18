import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/head";
import { faqs, site } from "@/lib/site";

export const Route = createFileRoute("/ukk")({
  head: () =>
    pageHead(
      "Usein kysytyt kysymykset | Laatusivut",
      "Vastauksia kartoitukseen, hintaan, aikatauluun, tukeen ja kevytyrittäjyyteen.",
      "/ukk",
    ),
  component: Ukk,
});

function Ukk() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={schema} />
      <main id="sisalto">
        <PageIntro
          eyebrow="UKK"
          title="Kysyttyä ennen yhteydenottoa"
          lead="Jos vastausta ei ole tässä, soita tai lähetä viesti. Keksittyjä lupauksia ei ole."
        />
        <section className="mx-auto max-w-3xl px-5 pb-16">
          <dl className="grid gap-10">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-line pt-5">
                <dt className="font-serif text-2xl">{f.q}</dt>
                <dd className="mt-3 text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-muted">
            Lisää: {site.email} · {site.phoneDisplay}
          </p>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
