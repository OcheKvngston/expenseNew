import React from 'react'
import "./expenseStyle.css"

const BorderCard = (props) => {
    let classes = "my_border " + props.className

  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default BorderCard