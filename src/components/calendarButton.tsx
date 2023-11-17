import { DayButton } from "../App.styles";


interface CalendarButtonProps {
   name?: number 
}

export default function CalendarButton({name}: CalendarButtonProps) { 
   

  return (
    <DayButton>{name && name < 10 ? '0' + name : name}</DayButton>
   );
}