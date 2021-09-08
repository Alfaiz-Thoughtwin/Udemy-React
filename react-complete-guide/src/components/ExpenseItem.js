import React from "react";
import "./ExpenseItem.css";
// import moment from 'moment'

function ExpenseItem(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  return (
    <>
      <div className="expense-item">
        {/* <div>{moment(props.date).format("MMMM Do YYYY")}</div> */}
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
