import { useState } from "react";
import { Container, ButtonContainer, CalendarContainer } from "./App.styles";
import Calendar from "./components/Calendar";
import Button from "./components/Button";
import EventForm from "./components/EventForm";

import { IEvents } from "./@types/events";




function App() {
  const [month, setMonth] = useState(1);
  const [events, setEvents] = useState<IEvents[]>([])
 
  const daysWithEvents = events.length > 0 ? events.map(event => event.date) : null

  function handleButton(n: number) {
    const num = month + n;
    if (!num) return;
    if (num <= 12) {
      setMonth(num);
    }
    return;
  }

  return (
    <Container>
      <EventForm setEvent={setEvents}/> 
      <CalendarContainer>
        <Calendar monthId={month} daysWithEvents={daysWithEvents} />
        <ButtonContainer>
          <Button onClick={() => handleButton(-1)}>Anterior</Button>
          <Button onClick={() => handleButton(1)}>Próximo</Button>
        </ButtonContainer>
      </CalendarContainer>
    </Container>
  );
}

export default App;
