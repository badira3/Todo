import React, { useState } from 'react'
import "./Todo.css"

const Addtask = ({addtask}) => {
    const [value,setvalue]=useState("")
    const additem=()=>{
        addtask(value);
        setvalue("")
    }
  return (
    <div className='input-container'>Addtask
    <input type='text' className='input' placeholder='Add a new task' 
    value={value}
    onChange={(e)=>{setvalue(e.target.value);}}/>
    <button onClick={additem} className='add-btn'>ADD</button>
    </div>
  )
}

export default Addtask