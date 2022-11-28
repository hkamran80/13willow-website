import Breadcrumbs from "./Breadcrumbs";
import DateFormatter from "./DateFormatter";

type Props = {
    title: string;
    date: string;
};

const PostHeader = ({ title, date }: Props) => {
    return (
        <>
            <Breadcrumbs
                basePath="/press"
                baseLabel="Press Releases"
                currentLabel={title}
            />

            <h1 className="mx-auto mb-2 text-center text-4xl font-semibold md:text-left">
                {title}
            </h1>
            <div className="mb-4 text-center font-light leading-snug text-gray-400 sm:text-left sm:text-xl">
                <DateFormatter dateString={date} />
            </div>
        </>
    );
};

export default PostHeader;
