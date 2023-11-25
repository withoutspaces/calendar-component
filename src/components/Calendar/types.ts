import { Dispatch, SetStateAction } from "react";
import { IEvents } from "../../@types/events";

export interface CalendarProps {
    monthId: number;
    daysWithEvents: string[] | null
    eventsData: IEvents[]
    setSelectedDate: Dispatch<SetStateAction<string>>
  }