import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { packages, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

export function ContactForm({ preset }: { preset?: string }) {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("fax") ?? "").trim();
    if (honeypot) {
      void navigate({ to: "/kiitos" });
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const pack = String(data.get("package") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Kirjoita nimesi.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Tarkista sähköpostiosoite.";
    if (message.length < 10) next.message = "Kerro lyhyesti mitä tarvitset (vähintään 10 merkkiä).";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setPending(true);

    const payload = { name, email, phone, company, message, package: pack };

    try {
      if (site.formEndpoint) {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("send-failed");
      }
      try {
        sessionStorage.setItem("laatusivut-last-inquiry", JSON.stringify({ ...payload, at: Date.now() }));
      } catch {
        /* ignore */
      }
      void navigate({ to: "/kiitos" });
    } catch {
      setPending(false);
      setErrors({
        form: "Lähetys ei onnistunut. Soita tai lähetä sähköposti suoraan.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Fax
          <input type="text" name="fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Nimi" error={errors.name} htmlFor="name">
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className={inputClass(errors.name)}
        />
      </Field>

      <Field label="Yritys (vapaaehtoinen)" htmlFor="company">
        <input id="company" name="company" autoComplete="organization" className={inputClass()} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Sähköposti" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass(errors.email)}
          />
        </Field>
        <Field label="Puhelin" htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass()} />
        </Field>
      </div>

      <Field label="Paketti (vapaaehtoinen)" htmlFor="package">
        <select id="package" name="package" defaultValue={preset ?? ""} className={inputClass()}>
          <option value="">En ole varma vielä</option>
          {packages.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mitä tarvitset?" error={errors.message} htmlFor="message">
        <textarea id="message" name="message" required rows={5} className={inputClass(errors.message)} />
      </Field>

      {errors.form ? <p className="text-sm text-error">{errors.form}</p> : null}

      <p className="text-sm text-muted">
        Lähettämällä viestin hyväksyt, että käsittelen tietojasi kartoitusta varten. Lue{" "}
        <Link to="/tietosuoja" className="underline decoration-brass underline-offset-4">
          tietosuojaseloste
        </Link>
        .
      </p>

      <Button type="submit" disabled={pending}>
        {pending ? "Lähetetään…" : "Lähetä ja varaa kartoitus"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(error?: string) {
  return [
    "min-h-11 w-full rounded-xs border bg-cream px-3 py-2 text-base text-fg",
    error ? "border-error" : "border-line",
  ].join(" ");
}
