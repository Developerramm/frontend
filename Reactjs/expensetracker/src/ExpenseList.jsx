import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses,onDelete}) => {

  if(expenses.length === 0){
    return <p className="no-expense">No expense yet </p>
  }
  return (
    <div className="expense-list">

      {
        expenses.map((item)=>{
          return <ExpenseItem key={item.id} item = {item} onDelete = {onDelete} />
        })
      }

      
    </div>
  );
};

export default ExpenseList;
