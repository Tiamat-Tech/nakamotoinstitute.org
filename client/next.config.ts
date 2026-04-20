import type { NextConfig } from "next";

import { env } from "./env";
import { defaultLocale, locales } from "./i18n";
import { externalUrls } from "./lib/urls-client";

const satoshiDestination = `${
  env.VERCEL_ENV === "development" ? "http://" : "https://"
}${
  env.MAP_DOMAIN || env.VERCEL_ENV === "production"
    ? `satoshi.${env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `${env.VERCEL_URL}/satoshi`
}`;

const cdnBaseUrl = new URL(env.CDN_BASE_URL);

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: env.VERCEL_ENV === "development",
    remotePatterns: [
      {
        protocol: cdnBaseUrl.protocol.replace(/:$/, "") as "http" | "https",
        hostname: cdnBaseUrl.hostname,
        port: cdnBaseUrl.port,
        pathname:
          cdnBaseUrl.pathname === "/" ? "/**" : `${cdnBaseUrl.pathname}/**`,
      },
    ],
  },
  trailingSlash: true,
  async redirects() {
    const redirects = [
      {
        source: "/bitcoin.pdf",
        destination: `${cdnBaseUrl}/docs/bitcoin.pdf`,
        permanent: true,
      },
      {
        source: "/donate/",
        destination: externalUrls.zaprite,
        permanent: false,
      },
    ];
    if (
      env.VERCEL_ENV === "production" ||
      (env.VERCEL_ENV === "development" && env.MAP_DOMAIN)
    ) {
      redirects.push(
        {
          source: "/satoshi/:path*",
          destination: `${satoshiDestination}/:path*`,
          permanent: true,
        },
        {
          source: "/en/satoshi/:path*",
          destination: `${satoshiDestination}/:path*`,
          permanent: true,
        },
        {
          source: `/:locale(${locales.filter((l) => l !== defaultLocale).join("|")})/satoshi/:path*`,
          destination: `${satoshiDestination}/:locale/:path*`,
          permanent: true,
        },
      );
    }
    return redirects;
  },
};

export default nextConfig;
