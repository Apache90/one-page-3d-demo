import Contacto from "./components/Contacto"
import QuienSomos from "./components/QuienSomos"
import Trabajos from "./components/Trabajos"
import Principal from "./components/Principal"
import { styled } from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Principal/>
      <QuienSomos/>
      <Trabajos/>
      <Contacto/>
    </Container>
  )
}

export default App
