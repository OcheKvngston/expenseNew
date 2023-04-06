import React from 'react'
import "./style.css"

const FilterBy = (props) => {
    const yearArray = ["2019","2020","2021","2022","2023","2024"]

    const onChangeDate = (e)=>{
        props.onHandleDate(e.target.value)
    }

  return (
    <div className='filter_con'>
        <form>
            <label>FilterBy: </label>
            <select value={props.select} onChange={onChangeDate}  >
                {
                    yearArray.map((props,i)=>(
                        <option key={i} value={props}>{props}</option>
                    ))
                }
            </select>
        </form>
    </div>
  )
}

export default FilterBy