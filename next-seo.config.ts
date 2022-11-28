import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
    themeColor: "#BE154D",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://13willow.com/",
        siteName: "Thirteenth Willow",
    },
    twitter: {
        handle: "@13thwillow",
        site: "https://13willow.com",
        cardType: "summary",
    },
};

export default config;
