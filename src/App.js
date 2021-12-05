import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container =  styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  justify-content: center;
  ${'' /* height:99vh;
  & *{
    padding: 10px;
  } */}
`;


const Header = styled.span`
  color:black;
  font-size:25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expanse Tracker</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
