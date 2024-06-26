import clsx from "clsx";
import { TFunction } from "i18next";
import Link from "next/link";

import { Chip } from "@/app/components/Chip";
import { Document, DocumentIndex } from "@/lib/api/schemas/library";

type DocFormatLinksProps = {
  t: TFunction<string, string>;
  className?: string;
  doc: Document;
  classes?: { root?: string; link?: string };
};

export async function DocFormatLinks({
  t,
  classes,
  className,
  doc,
}: DocFormatLinksProps) {
  const links: React.ReactNode[] = [];

  doc.formats?.forEach((format) =>
    links.push(
      <Link key={format.type} className={classes?.link} href={format.url}>
        {format.type === "epub" ? "ePub" : format.type.toUpperCase()}
      </Link>,
    ),
  );

  if (doc.external) {
    links.push(
      <Link key="link" href={doc.external} className={classes?.link}>
        {t("external_link")}
      </Link>,
    );
  }

  return links ? (
    <div className={clsx(className, classes?.root, "flex gap-3")}>{links}</div>
  ) : null;
}

type DocFormatChipsProps = {
  t: TFunction<string, string>;
  className?: string;
  doc: DocumentIndex;
};

export async function DocFormatChips({
  t,
  className,
  doc,
}: DocFormatChipsProps) {
  const chips: React.ReactNode[] = [];

  if (doc.hasContent) {
    chips.push(<Chip key="html">HTML</Chip>);
  }

  doc.formats?.forEach((format) =>
    chips.push(
      <Chip key={format.type}>
        {format.type === "epub" ? "ePub" : format.type.toUpperCase()}
      </Chip>,
    ),
  );

  if (doc.external) {
    chips.push(<Chip key="link">{t("link")}</Chip>);
  }

  return chips ? (
    <div className={clsx(className, "flex gap-1")}>{chips}</div>
  ) : null;
}
