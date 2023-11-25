import { FormEvent } from "react";
import { GeneralButton } from "../Button/styles";
import { Form, Input } from "./styles";
import { EventFormProps } from "./types";


export default function EventForm({setEvent, selectedDate}: EventFormProps) {



  function handleFormSubmmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const date = formData.get('date') as string
    const description = formData.get('description') as string

    const newEvent = {name, date, description}

    setEvent(prev => [...prev, newEvent])
  }

  return (
      <Form onSubmit={handleFormSubmmit}>
        <Input>
            <label htmlFor="name">Nome do evento</label>
            <input type="text" name="name" id="name" required/>
        </Input>         
        <Input>
            <label htmlFor="date">Data</label>
            <input type="date" name="date" id="date" required value={selectedDate}/>
        </Input> 
        <Input>
            <label htmlFor="description">Descrição</label>
            <textarea rows={7} name="description" id="description" required/>
        </Input>  
        <GeneralButton type="submit">Registrar</GeneralButton>             
      </Form>
   );
}