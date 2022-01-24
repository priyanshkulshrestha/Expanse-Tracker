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
    cursor: pointer;
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

const ExpenseContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 2px;
`;
const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  margin: 20px;
  width: 135px;
  & span{
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => (props.isIncome ? "green" : "red")};
  }
`;



const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("");

  const addTransaction = () =>{
    props.addTransaction({
      amount:Number(amount),
      desc,
      type, 
      id:Date.now(),
    })
    console.log({amount, desc, type});
    props.toggleAddTxn();
  }

  return(


    <AddTransactionContainer>
      <input placeholder="Amount" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} required/>
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required/>
      <RadioBox>

          <Input type="radio"
          id ="expense"
          name="type"
          value="EXPENSE"
          required = "True"
          checked={type==="EXPENSE"}
          onChange={(e)=> setType(e.target.value)} /> 
          <label htmlFor="expanse">Expense</label>

          <Input type="radio"
          id ="income"
          name="type"
          value="INCOME"
          checked={type==="INCOME"}
          onChange={(e)=> setType(e.target.value)} /> 
          <label htmlFor="Income">Income</label>
      </RadioBox>

      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>  
  )
}


const OverviewComponent = (props) => {
    const  [isAddTxnVisible, toggleAddTxn] = useState(false)
    return (
        <Container>
          {/* Overview components */}
          <BalanceBox>
            Balance: ${props.income}
            <AddTransaction onClick={()=>toggleAddTxn(!isAddTxnVisible)}>
              {isAddTxnVisible?"Cancel":"Add"}
            </AddTransaction>
          </BalanceBox>
          {isAddTxnVisible && (
            <AddTransactionView
            toggleAddTxn = {toggleAddTxn} 
            addTransaction={props.addTransaction}
          />)}
          <ExpenseContainer>
            <ExpenseBox isIncome={false}>
              Expense <span>${props.expense}</span>
            </ExpenseBox>
            <ExpenseBox isIncome={true}>
              Income <span>${props.income}</span>
            </ExpenseBox>
          </ExpenseContainer>
        </Container>
    );
};

export default OverviewComponent 