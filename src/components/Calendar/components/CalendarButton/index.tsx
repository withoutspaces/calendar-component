import { DayButton } from "./styles";
import { CalendarButtonProps } from "./types";

export default function CalendarButton({name, hasEvent}: CalendarButtonProps) {
  const event = hasEvent;
  return event ? (
    <DayButton $event>{name < 10 ? "0" + name : name}</DayButton>
  ) : (
    <DayButton>{name < 10 ? "0" + name : name}</DayButton>
  );
}
