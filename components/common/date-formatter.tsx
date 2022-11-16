import { parseISO, format } from "date-fns";
import { useEffect, useState } from "react";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date: Array<string> = dateString.split(" "); // 요일, 날짜, 월, 년도, 시간
  const monthEng = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weeks = {
    Sun: "일요일",
    Mon: "월요일",
    Tue: "화요일",
    Wed: "수요일",
    Thu: "목요일",
    Fri: "금요일",
    Sat: "토요일",
  };

  const [month, setMonth] = useState<string>();
  const [week, setWeek] = useState<string>();

  useEffect(() => {
    // 월 변경
    monthEng.forEach((mon, key) => {
      if (date[2] === mon) {
        if (key < 9) {
          setMonth(`0${key + 1}`);
        } else {
          setMonth(`${key + 1}`);
        }
      }
    });

    // 요일 변경
    for (const [key, value] of Object.entries(weeks)) {
      if (date[0].slice(0, -1) === key) {
        setWeek(value);
      }
    }
  }, [date]);

  return (
    <span className="text-sm text-textMain">
      {`${date[3]}. ${month}. ${date[1]}. ${week}`}
    </span>
  );
};

export default DateFormatter;
