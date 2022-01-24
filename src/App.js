import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container =  styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  justify-content: center;
  ${'' /* background: #edd4d4; */}
  padding: 10px;
  border: 2px solid black;


  ${'' /* height:99vh;
  & *{
    padding: 10px;
  } */}
`;


const Header = styled.span`
  color:black;
  font-size:25px;
  font-weight: bold;
  margin-bottom: 10px;
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
