import { Dispatch, SetStateAction } from "react"
import { IEvents } from "../../@types/events"

export interface EventFormProps {
    setEvent: Dispatch<SetStateAction<IEvents[]>>
    selectedDate: string
}