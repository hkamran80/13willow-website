type Props = {
    dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
    const date = new Date(dateString);
    return (
        <time dateTime={dateString}>
            {date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </time>
    );
};

export default DateFormatter;
