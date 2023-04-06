import React, {useState} from "react";
import Expense from "./Expense";
import "../component/card.css"
import BorderCard from "./expense/BorderCard";


const Card = (props)=>{
    let [myTitle,setMyTitle] = useState(props.title)
    console.log(myTitle);
    // let title = props.title
    // console.log("this is first",title);
    let handleSumbit = ()=>{
        setMyTitle("Updated")
        // title = "Updated"
        // console.log(title);
    }
    return(
        <BorderCard className="case">
            
         <Expense date={props.date}/>

         <div className="case1">
            {props.title}
         </div>
         <div className="case2">
            -₦{props.amount}
         </div>
         <button onClick={handleSumbit} style={{cursor:"pointer"}}>Click me</button>

        </BorderCard>
    )
}

export default Card