import ErrorPage from "next/error";
import Head from "next/head";
import Layout from "@/components/Layout";
import PostHeader from "@/components/PostHeader";
import { getAllPRs, getPRBySlug } from "@/lib/pressrelease";
import { renderMarkdown } from "@/lib/markdown";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import type { PressRelease } from "@/types/press";
import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from "next-seo";

type Props = {
    pressRelease: PressRelease;
};

const PressReleasePage: NextPage<Props> = ({ pressRelease }) => {
    const router = useRouter();

    if (!router.isFallback && !pressRelease?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout childrenClasses="max-w-3xl mx-auto">
            {router.isFallback ? (
                <h1 className="mx-auto mb-2 text-center text-4xl font-semibold md:text-left">
                    Loading...
                </h1>
            ) : (
                <article className="pb-6">
                    <Head>
                        <title>{`${pressRelease.title} - Thirteenth Willow`}</title>
                    </Head>

                    <NextSeo
                        title={pressRelease.title}
                        description={pressRelease.subtitle}
                        canonical={`https://13willow.com/press/${pressRelease.slug}`}
                    />

                    <ArticleJsonLd
                        url={`https://13willow.com/press/${pressRelease.slug}`}
                        title={pressRelease.title}
                        images={[]}
                        datePublished={pressRelease.date}
                        authorName={[
                            {
                                name: "Thirteenth Willow",
                                url: "https://13willow.com",
                            },
                        ]}
                        publisherName="Thirteenth Willow"
                        description={pressRelease.subtitle}
                        isAccessibleForFree={true}
                    />

                    <BreadcrumbJsonLd
                        itemListElements={[
                            {
                                position: 1,
                                name: "Press Releases",
                                item: "https://13willow.com/press",
                            },
                            {
                                position: 2,
                                name: pressRelease.title,
                                item: `https://13willow.com/press/${pressRelease.slug}`,
                            },
                        ]}
                    />

                    <PostHeader
                        title={pressRelease.title}
                        date={pressRelease.date}
                    />

                    <div className="mx-auto max-w-3xl">
                        <div
                            className="prose prose-invert max-w-none prose-a:text-pink-700"
                            dangerouslySetInnerHTML={{
                                __html: pressRelease.content,
                            }}
                        />
                    </div>
                </article>
            )}
        </Layout>
    );
};

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const pressRelease = getPRBySlug(params.slug, [
        "slug",
        "title",
        "subtitle",
        "date",
        "content",
    ]);

    const content = renderMarkdown(pressRelease.content ?? "");

    return {
        props: {
            pressRelease: {
                ...pressRelease,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const pressReleases = getAllPRs(["slug"]);

    return {
        paths: pressReleases.map((pressRelease) => {
            return {
                params: {
                    slug: pressRelease.slug,
                },
            };
        }),
        fallback: false,
    };
}

export default PressReleasePage;
