import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import NavLink from "@/components/NavLink";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Thirteenth Willow</title>
            </Head>

            <Layout
                childrenClasses="max-w-2xl mx-auto"
                footerClasses="space-y-4 text-center text-xs text-gray-500 pb-10"
                footer={
                    <Footer extra="Google Play and the Google Play logo are trademarks of Google LLC. App Store and the Apple logo are trademarks of Apple Inc." />
                }
            >
                <div className="prose prose-invert max-w-none prose-a:text-pink-700">
                    <h2>Projects</h2>
                    <div className="not-prose flex flex-col space-y-2">
                        <Project
                            url="https://go.unisontech.org/sch"
                            name="Schedules"
                            description="Schedules gives you handy information about your bell schedules, such as the current period, the countdown to the next period, and the starting time of the next period. For each school, Schedules sends handy notifications at predefined intervals and features a full bell schedule for each day of the week."
                            logoUrl="/assets/projects/schedules.png"
                            apps={{
                                ios: "https://apps.apple.com/us/app/schedules-find-your-schedules/id6444194250",
                                android:
                                    "https://play.google.com/store/apps/details?id=com.hkamran.schedules",
                            }}
                        />
                    </div>

                    <h2>About Thirteenth Willow</h2>
                    <p>
                        Thirteenth Willow was founded by Bay Area resident and
                        Acalanes High School senior{" "}
                        <a
                            href="https://hkamran.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Harris Kamran
                        </a>
                        , who creates software to improve society in his spare
                        time.
                    </p>

                    <h2>
                        <NavLink href="/press">View Press Releases</NavLink>
                    </h2>
                </div>
            </Layout>
        </>
    );
};

export default Home;
