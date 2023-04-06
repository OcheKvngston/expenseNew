import React from 'react'
import Card from "../Card"
import "../expense/expenseStyle.css"
import FilterBy from '../filterby/FilterBy'
import NewExpense from '../newExpense/NewExpense'
import BorderCard from './BorderCard'

const info = [
  
  {
    id: "784",
    title: "Ice Cream",
    amount: 200,
    date: new Date (2019,3,2),
  },
  {
    id: "735",
    title: "Cream",
    amount: 500,
    date: new Date (2022,4,6),
  },
  {
    id: "78433",
    title: "Agbado",
    amount: 1000,
    date: new Date (2020,1,10),
  },
  {
    id: "0801",
    title: "Corn",
    amount: 700,
    date: new Date (2023,2,12),
  },
]

const ExpenseHome = ()=>{
  const [myData,setMyData] = React.useState(info)
  const [selectDate,setSelectDate] = React.useState('2019 ')
  const addMyExpense = (data)=>{
    // console.log("show", data);
    // info.push(data)
    setMyData([data,...myData])
  }

  const onHandleDate = (myDate)=>{
    setSelectDate(myDate)
  }

  const myFilter = myData.filter((expense)=>(
    expense.date.getFullYear().toString() === selectDate
  ))
return(
    <div className='holder'>
            <NewExpense onsavenow={addMyExpense}/>
            <FilterBy select={selectDate} onHandleDate={onHandleDate} />
            <BorderCard className='holder1'>
            {
              myFilter.map((props)=>(
                <Card key={props.id} title={props.title} amount={props.amount} date={props.date}/>
              ))
            }
            </BorderCard>
      </div>
)
}

export default ExpenseHome