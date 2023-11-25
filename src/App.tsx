import { Container, ButtonContainer, CalendarContainer } from "./App.styles";
import { useState } from "react";
import { IEvents } from "./@types/events";

import Calendar from "./components/Calendar";
import Button from "./components/Button";
import EventForm from "./components/EventForm";

function App() {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [events, setEvents] = useState<IEvents[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  

  const daysWithEvents =
    events.length > 0 ? events.map((event) => event.date) : null;

  function handleButton(n: number) {
    const num = currentMonth + n;
    if (!num) return;
    if (num <= 12) setCurrentMonth(num);
    return;
  }

  return (
    <Container>
      <EventForm setEvent={setEvents} selectedDate={selectedDate} />
      <CalendarContainer>
        <Calendar
          monthId={currentMonth}
          daysWithEvents={daysWithEvents}
          eventsData={events}
          setSelectedDate={setSelectedDate}
        />
        <ButtonContainer>
          <Button onClick={() => handleButton(-1)}>Anterior</Button>
          <Button onClick={() => handleButton(1)}>Próximo</Button>
        </ButtonContainer>
      </CalendarContainer>
    </Container>
  );
}

export default App;
