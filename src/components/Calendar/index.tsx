import CalendarButton from "./components/CalendarButton/index.tsx";
import CalendarSpaces from "./components/CalendarSpaces/index.tsx";
import DaysOfTheWeek from "./components/DaysOfTheWeek/index.tsx";
import { CalendarContainer, Title, Container } from "./styles.ts";
import { calendar } from "../../mocks/calendar.ts";
import { CalendarProps } from "./types.ts";


export default function Calendar({ monthId, daysWithEvents }: CalendarProps) {
  const months = calendar.filter((month) => month.monthNumber === monthId)[0];

  return (
    <Container>
      <Title>{months.name}</Title>
      <DaysOfTheWeek />
      <CalendarContainer>
        {months.days.map((day, index) => {
          const currentDate = `2023-${
            months.monthNumber < 10
              ? "0" + months.monthNumber
              : months.monthNumber
          }-${day < 10 ? "0" + day : day}`;

          const hasEvent = daysWithEvents?.includes(currentDate);
          

          if (index === 0 && months.firstDay) {
            const { firstDay } = months;
            return Array.from({ length: firstDay }, () => <CalendarSpaces />);
          }
          return <CalendarButton name={day} hasEvent={hasEvent} />;
        })}
      </CalendarContainer>
    </Container>
  );
}
