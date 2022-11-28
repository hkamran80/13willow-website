import { classNames } from "@hkamran/utility-web";
import Image from "next/image";
import Link from "next/link";

const Project = ({
    url,
    name,
    description,
    logoUrl,
    apps,
}: {
    url: string;
    name: string;
    description: string;
    logoUrl: string;
    apps?: { ios?: string; android?: string };
}) => {
    const appsLength = apps ? Object.keys(apps).length : 0;

    return (
        <>
            <Link
                href={url}
                target="_blank"
                className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-5 md:px-4"
            >
                <Image
                    src={logoUrl}
                    alt={`${name} logo`}
                    width={128}
                    height={128}
                    className="h-24 w-24 rounded-lg"
                />

                <div className="prose prose-invert flex max-w-none flex-col space-y-1">
                    <p className="text-xl font-bold">{name}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </Link>

            <section
                className={classNames(
                    "grid grid-cols-1 items-center justify-center pt-4 md:pt-0",
                    appsLength === 2 ? "md:grid-cols-2" : "",
                )}
            >
                {apps?.ios ? (
                    <a
                        href={`${apps.ios}?itsct=apps_box_badge&itscg=30200`}
                        className="flex justify-center"
                    >
                        <Image
                            src="/assets/badges/appstore.svg"
                            alt="Download on the App Store"
                            width={119.66407}
                            height={40}
                            className={classNames("h-30")}
                        />
                    </a>
                ) : null}

                {apps?.android ? (
                    <a
                        href={`${apps.android}&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
                        className="flex justify-center"
                    >
                        <Image
                            src="/assets/badges/playstore.png"
                            alt="Get it on Google Play"
                            width={646}
                            height={250}
                            className={classNames(
                                apps.ios && apps.android ? "h-16 w-auto" : "",
                            )}
                        />
                    </a>
                ) : null}
            </section>
        </>
    );
};

export default Project;
