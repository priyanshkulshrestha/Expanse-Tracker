import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container =  styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  width: 360px;
`;

const HomeComponent = (props) => {
    return (
        <Container>
            {/* HomeComponenet */}
            <OverviewComponent />
            <TransactionComponent />
        </Container>
    )
}

export default HomeComponent