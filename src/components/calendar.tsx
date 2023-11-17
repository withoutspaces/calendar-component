import CalendarButton from "./calendarButton";
import CalendarSpaces from "./calendarSpaces";

import { CalendarContainer, Title } from "../App.styles";
import { calendar } from "./mocks/calendar";
import DaysOfTheWeek from "./daysOfTheWeek";

interface CalendarProps {
  monthId: number;
}

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
