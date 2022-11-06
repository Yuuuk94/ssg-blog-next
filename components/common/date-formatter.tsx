import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-sm leading-snug text-textSub">
      {format(date, "yyyy, LLLL	d")}
    </time>
  );
};

export default DateFormatter;
