import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return "Odottamaton virhe. Kokeile ladata sivu uudelleen.";
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="text-sm tracking-[0.16em] text-muted uppercase">Virhe</p>
      <h1 className="font-serif text-3xl">Jokin meni pieleen</h1>
      <p className="max-w-md text-base break-words text-muted">{errorMessage(error)}</p>
      <Link
        to="/"
        className="mt-2 inline-flex min-h-11 items-center bg-spruce px-5 text-bg hover:bg-dusk"
      >
        Etusivulle
      </Link>
    </main>
  );
}
