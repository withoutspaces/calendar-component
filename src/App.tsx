import { useState } from "react"
import { Container, ButtonContainer } from "./App.styles"
import Calendar from "./components/Calendar"
import Button from "./components/Button"


function App() {

  const [month, setMonth] = useState(1)

  function handleButton(n: number){
    const num = month + n
    if(!num) return
    if(num <= 12) {
      setMonth(num)
    }
    return
  }

  return (
    <Container>
      <Calendar monthId={month}/>
      <ButtonContainer>
        <Button onClick={() => handleButton(-1)}>Anterior</Button>
        <Button onClick={() => handleButton(1)}>Próximo</Button>
      </ButtonContainer>
    </Container>
  )
}

export default App
