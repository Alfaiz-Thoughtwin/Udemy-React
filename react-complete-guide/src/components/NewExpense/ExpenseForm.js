import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState("");

    const [enteredAmount, setEnteredAmount] = useState("");

    const [enteredDate, setEnteredDate] = useState("");
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

  return (
    <>
      <form>
          <div className="new-expense__controls">
              <div className="new-expense__control">
                  <label htmlFor="title">Title</label>
                  <input type="text" value={enteredTitle} onChange={titleChangeHandler} name="title" id="title" autoComplete="off" />
              </div>
              <div className="new-expense__control">
                  <label htmlFor="amount">Amount</label>
                  <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" name="amount" id="amount" autoComplete="off" />
              </div>
              <div className="new-expense__control">
                  <label htmlFor="date">Date</label>
                  <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" name="date" id="date" />
              </div>
          </div>
          <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
          </div>
      </form>
    </>
  );
}

export default ExpenseForm;
