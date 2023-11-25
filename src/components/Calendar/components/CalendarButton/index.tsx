import { DayButton } from "./styles";
import { CalendarButtonProps } from "./types";

export default function CalendarButton({name, hasEvent, onClick}: CalendarButtonProps) {
  const event = hasEvent;
  return event ? (
    <DayButton $event onClick={onClick}>{name < 10 ? "0" + name : name}</DayButton>
  ) : (
    <DayButton onClick={onClick}>{name < 10 ? "0" + name : name}</DayButton>
  );
}
