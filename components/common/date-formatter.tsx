import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dateString.split(" "); // 요일, 날짜, 월, 년도, 시간
  console.log(date, dateString);

  return (
    <time dateTime={dateString} className="text-sm leading-snug text-textSub">
      {`${date[0].slice(0, -1)}, ${date[1]}, ${date[2]}, ${date[3]}`}
    </time>
  );
};

export default DateFormatter;
