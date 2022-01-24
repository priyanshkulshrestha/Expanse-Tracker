import styled from "styled-components";
import {useState, useEffect} from "react";
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
    const [transactions, updateTransactions] = useState([]);
    const [expanse, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransactions(transactionArray);   
    }

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) => {
            payload.type === "EXPENSE"
            ? (exp = exp + payload.amount )
            : (inc = inc + payload.amount);
        })
        updateExpense(exp);
        updateIncome(inc);
    }


    useEffect(() => calculateBalance(),[transactions]);

    return (
        <Container>
            {/* HomeComponenet */}
            <OverviewComponent addTransaction = {addTransaction} expense={expanse} income={income}/>
            <TransactionComponent transactions = {transactions}/>
        </Container>
    )
}

export default HomeComponent