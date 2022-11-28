import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "next-seo.config";
import { DefaultSeo, OrganizationJsonLd, SocialProfileJsonLd } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <OrganizationJsonLd
                type="Organization"
                id="https://13willow.com/#corporation"
                name="Thirteenth Willow"
                url="https://13willow.com"
            />
            <SocialProfileJsonLd
                type="Organization"
                name="Thirteenth Willow"
                url="https://13willow.com"
                sameAs={[
                    "https://twitter.com/13thwillow",
                    "https://instagram.com/13thwillow",
                ]}
            />

            <Component {...pageProps} />
        </>
    );
}
