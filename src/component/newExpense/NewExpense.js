import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./style.css"

const NewExpense = (props) => {
  const onHandleExpense = (data)=>{

    let myExpense = {
      ...data,
      id:Math.random().toString()
    }
    // console.log(myExpense);
    props.onsavenow(myExpense)
  }

  return (
    <div className='CaseHolder'>
        <ExpenseForm ongetExpense = {onHandleExpense}/>
        {/* <button onClick={props.onsaveexpense({"title":"oche","amount":"3000"})} >trying</button> */}
    </div>
  )
}

export default NewExpense