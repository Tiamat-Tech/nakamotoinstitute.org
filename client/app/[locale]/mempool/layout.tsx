import { Metadata } from "next";

import { i18nTranslation } from "@/lib/i18n/i18nTranslation";
import { urls } from "@/lib/urls";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  const { t } = await i18nTranslation(locale);
  return {
    alternates: {
      types: {
        "application/rss+xml": [
          {
            title: t("memory_pool"),
            url: urls(locale).mempool.rss,
          },
        ],
        "application/atom+xml": [
          {
            title: t("memory_pool"),
            url: urls(locale).mempool.atom,
          },
        ],
      },
    },
  };
}

export default function MempoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
