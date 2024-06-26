import Big from "big.js";
import { TFunction } from "i18next";
import Link from "next/link";

import { Rehype } from "@/app/components/Rehype";
import { Price, Skeptic } from "@/lib/api/schemas/skeptics";
import { cdnUrl } from "@/lib/urls";
import { formatDate } from "@/utils/dates";
import { calculateDCA } from "@/utils/prices";
import { commafy } from "@/utils/strings";

import { SkepticPriceData } from "./PriceData";

const DAILY_BUY = new Big(1);

type SkepticProps = {
  t: TFunction<string, string>;
  locale: Locale;
  skeptic: Skeptic;
  prices: Price[];
};

export async function SkepticListing({
  t,
  locale,
  skeptic,
  prices,
}: SkepticProps) {
  const priceData = calculateDCA(skeptic.date, prices, DAILY_BUY);

  return (
    <article
      id={skeptic.slug}
      className="border-b border-solid py-4 first:pt-0 last:border-b-0"
    >
      <header>
        <p className="text-2xl">
          {formatDate(locale, skeptic.date)} • $
          {commafy(priceData.originalUsd.toFixed(2))}
        </p>
        <Link href={{ hash: skeptic.slug }}>
          <h2 className="text-3xl">{skeptic.name}</h2>
        </Link>
        <p className="italic">{skeptic.title}</p>
      </header>
      <section className="py-2">
        <SkepticPriceData t={t} priceData={priceData} />
      </section>
      <section>
        {skeptic.excerpt ? <Rehype>{skeptic.excerpt}</Rehype> : null}
        {skeptic.twitterScreenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="mx-auto my-4"
            src={cdnUrl(`/img/skeptics/${skeptic.slug}.jpg`)}
            alt=""
          />
        ) : null}
        {skeptic.mediaEmbed ? (
          <div
            className="my-4 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: skeptic.mediaEmbed }}
          />
        ) : null}
        {skeptic.waybackLink ? (
          <p>
            <Link href={skeptic.waybackLink}>{t("archive_link")}</Link>
          </p>
        ) : null}
      </section>
    </article>
  );
}
