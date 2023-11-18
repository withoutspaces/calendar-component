import { DayButton } from "../../../../App.styles";
import { CalendarButtonProps } from "./types";


export default function CalendarButton({name}: CalendarButtonProps) { 
   
  return (
    <DayButton>{name < 10 ? '0' + name : name}</DayButton>
   );
}