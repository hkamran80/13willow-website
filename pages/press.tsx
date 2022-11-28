import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import Layout from "@/components/Layout";
import { getAllPRs } from "@/lib/pressrelease";
import type { PressRelease } from "@/types/press";
import type { GetStaticProps, NextPage } from "next";
import PressReleaseCard from "@/components/PressReleaseCard";

type Props = {
    pressReleases: Omit<PressRelease, "subtitle" | "content">[];
};

const Press: NextPage<Props> = ({ pressReleases }) => {
    return (
        <Layout>
            <Head>
                <title>Press Releases - Thirteenth Willow</title>
            </Head>

            <div className="mx-auto max-w-2xl">
                <Breadcrumbs baseLabel="Press Releases" />

                <h1 className="text-center text-4xl font-semibold md:text-left">
                    Press Releases
                </h1>

                <div className="mt-6">
                    {pressReleases.map((pressRelease, index: number) => (
                        <PressReleaseCard
                            key={index}
                            pressRelease={pressRelease}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const pressReleases = getAllPRs(["slug", "title", "date"]);
    console.debug(pressReleases);
    return { props: { pressReleases } };
};

export default Press;
