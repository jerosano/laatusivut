import { site } from "@/lib/site";

export function pageHead(title: string, description: string, path: string) {
  const url = `${site.url}${path === "/" ? "/" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
