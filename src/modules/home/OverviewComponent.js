import { useState } from "react";
import styled from "styled-components";

const Container =  styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  width: 100%;
  align-items: center;
`;

const BalanceBox = styled.div`
    display:flex;
    font-size:18px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-item: center;
`;

const AddTransaction = styled.button`
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    coursor: pointer;
    font-weight: bold;
    font-size: 15px;
`;

const AddTransactionContainer = styled.div`
    display:flex;
    font-size:18px;
    flex-direction: Column;
    border: 1px solid #e6e8e9;
    justify-content: center;
    text-align:center;
    gap: 10px;
    padding: 15px 20px;
    align-item: center;
    width: 100%;
    & input{
      outline: none;
      padding: 10px 12px;
      border-radius: 4px;
      border: 1px solid #e6e8e9;
    }
`;

const RadioBox = styled.div`
    display: flex;
    flex-direcion: row;
    width: 100%;
    align-item: space-around;
    justify-content: center;
`;

const Input = styled.input`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 5px;
`;

const AddTransactionView = () => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return(
    <AddTransactionContainer>
    <input placeholder="Amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
    <input placeholder="Description"/>
    <RadioBox>
        <Input type="radio"
         id ="expense"
         name="type"
         value="EXPENSE"
         checked={type==="EXPENSE"} /> 
        <label htmlfor="expanse">Expense</label>
        <Input type="radio"
         id ="income"
         name="type"
         value="INCOME"
         checked={type==="INCOME"} /> 
        <label htmlfor="income">Income</label>
    </RadioBox>
    <AddTransaction>Add Transaction</AddTransaction>
    </AddTransactionContainer>  
  )
}


const OverviewComponent = (props) => {
    const  [isAddTxnVisible, toggleAddTxn] = useState(true)
    return (
        <Container>
          {/* Overview components */}
          <BalanceBox>
          Balance: $10000
          <AddTransaction onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible?"Cancel":"Add"}</AddTransaction>
          </BalanceBox>
          {isAddTxnVisible && <AddTransactionView />}
        </Container>
    );
};

export default OverviewComponent 