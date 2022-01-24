import styled from "styled-components";
import {useState, useEffect} from 'react';

import "../../index.css"
const Container =  styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input{
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid grey;
    width: 90%;
  }
`;

// const TransactionCell = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background: grey;
//     width: 100%;
// `;

const Cell = styled.div`
  display: flex;
  width: 95%;
  flex-direction: row;
  pedding: 10px 15px;
  border-radius: 2px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${props => (props.isExpense ? "red": "green")}; 
`;

const TransactionCell = (props) => {
  return(
    <Cell isExpense={props.payload.type === "EXPENSE"? true:false}>
      <div>{props.payload.desc}</div>
      <div>{props.payload.amount}</div>
    </Cell>
  )
}



const TransactionComponent = (props) => {

  const [filtertxn, setFiltertxn] = useState("");
  const [searchText, setSearchText] = useState(props.transactions);

  const filterData = (searchText) => {
    if(!searchText ){
      setFiltertxn(props.transactions || !((searchText.toString.trim()).length));
      return;  
    }
    let txn = [...props.transactions];

    txn = txn.filter((payload) => ((payload.desc).toString()).toLowerCase().includes(searchText.toString().toLowerCase().trim()))
    setFiltertxn(txn);
  }


  useEffect(()=>filterData(searchText),[props.transactions])

    return (
        <Container>
          Transactions

          <input
          type="text" 
          name="search" 
          placeholder="Search" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
            filterData(e.target.value);
            }} />
          
          {filtertxn.length ? filtertxn.map((payload) => (<TransactionCell payload={payload} />)):""}
          
          

        </Container>
    );
};

export default TransactionComponent