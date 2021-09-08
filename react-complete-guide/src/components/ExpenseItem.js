import React from "react";
import "./ExpenseItem.css";
import moment from 'moment'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    // const expenseDate = new Date();
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67;
  return (
    <>
      <div className="expense-item">
        <div>{moment(expenseDate).format("MMMM Do YYYY")}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
