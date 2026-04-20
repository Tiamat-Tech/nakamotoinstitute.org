import { notFound } from "next/navigation";

import { isLocale } from "@/i18n";
import { api } from "@/lib/api";

export const dynamic = "force-static";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/[locale]/mempool/atom.xml">,
) {
  const { locale } = await ctx.params;
  if (!isLocale(locale)) notFound();
  const { data: content = "" } = await api.mempool.generateFeed({
    query: { locale, format: "atom" },
  });

  return new Response(content, {
    headers: {
      "Content-Type": "application/atom+xml",
      "Content-Disposition": 'attachment; filename="atom.xml"',
    },
  });
}
