import styled from "styled-components";

const Container =  styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  width: 100%;
`;

const Transaction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: grey;
    width: 100%;
`;

const Ammount = styled.div`
    font-weight: bold;
`;




const TransactionComponent = (props) => {
    return (
        <Container>
          Transactions
          <Transaction>
            <Ammount>$2000</Ammount>
            
          </Transaction>

        </Container>
    );
};

export default TransactionComponent