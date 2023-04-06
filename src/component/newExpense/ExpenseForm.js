import React from 'react'
import "./style.css"
const ExpenseForm = (props) => {
    let [title, setTitle] = React.useState("")
    let [Price, setPrice] = React.useState("")
    let [date, setDate] = React.useState("")

    const handleTitle = (event)=>{
        // console.log(event.target.value);
        setTitle(event.target.value)
        console.log(title);
    }
    const handlePrice = (event)=>{
        // console.log(event.target.value);
        setPrice(event.target.value)
        console.log(Price);
    }
    const handleDate = (event)=>{
        // console.log(event.target.value);
        setDate(event.target.value)
        console.log(date);
    }
    const handleSubmit = (e)=>{

        e.preventDefault();
        let userData = {
            title: title,
            amount: Price,
            date:new Date(date)
        }
        // console.log(userData);
        setTitle("")
        setPrice("")
        setDate("")
        props.ongetExpense(userData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='NewControl'>
                <div className='controlNew'>
                    <label>Title: </label>
                    <input type="text" placeholder='title' onChange={handleTitle} value={title}/>
                </div>
                <div className='controlNew'>
                    <label>Price: </label>
                    <input type="number" min="0.1" step="0.1" value={Price} onChange={handlePrice}/>
                </div>
                <div className='controlNew'>
                    <label>Date: </label>
                    <input type="date" placeholder='date' min="2019-01-01" max="2024-01-01" value={date} onChange={handleDate}/>
                </div>
            </div>
            <div className='ExpenseButton'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
export default ExpenseForm     