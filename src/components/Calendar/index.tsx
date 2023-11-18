import CalendarButton from "./components/CalendarButton/index.tsx";
import CalendarSpaces from "./components/CalendarSpaces/index.tsx";
import DaysOfTheWeek from "./components/DaysOfTheWeek/index.tsx";

import { CalendarContainer, Title } from "../../App.styles.ts";
import { calendar } from "../../mocks/calendar.ts";
import { CalendarProps } from "./types.ts";


export default function Calendar({ monthId }: CalendarProps) {
  const months = calendar.filter((month) => month.monthNumber === monthId)[0];

  return (
    <>
      <Title>{months.name}</Title>
      <DaysOfTheWeek />
      <CalendarContainer>
        {months.days.map((day, index) => {
          if (index === 0 && months.firstDay) {
            const { firstDay } = months;
            return Array.from({ length: firstDay }, () => <CalendarSpaces />);
          }
          return <CalendarButton name={day} />;
        })}
      </CalendarContainer>
    </>
  );
}
