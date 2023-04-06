import React from "react";
import "../component/expense/expenseStyle.css"

const Expense = (props)=>{
    return(
        <div>
           <div className="van">
             {props.date.toLocaleString("en-US", {month : "long"})}<br/>
             {props.date.toLocaleString("en-US", {day : "2-digit"})}<br/>
             {props.date.getFullYear()}
           </div>
        </div>
    )
}

export default Expense

