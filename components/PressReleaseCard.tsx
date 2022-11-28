import { PressRelease } from "@/types/press";
import Link from "next/link";

const PressReleaseCard = ({
    pressRelease,
}: {
    pressRelease: Omit<PressRelease, "subtitle" | "content">;
}) => {
    return (
        <Link
            href={`/press/${pressRelease.slug}`}
            className="mt-1 pt-5 hover:cursor-pointer"
        >
            <div className="items-center">
                <p className="text-xl font-semibold text-gray-200">
                    {pressRelease.title}
                </p>
                <p className="mt-2 text-base text-gray-400">
                    {pressRelease.date !== "" ? (
                        <time dateTime={pressRelease.date}>
                            {new Date(pressRelease.date).toLocaleDateString(
                                undefined,
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                },
                            )}
                        </time>
                    ) : (
                        "Unknown Date"
                    )}
                </p>
            </div>
        </Link>
    );
};

export default PressReleaseCard;
