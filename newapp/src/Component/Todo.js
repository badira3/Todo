import React, { useEffect, useState } from 'react'
import Addtask from './Addtask'
import ListTask from './ListTask'
import "./Todo.css"

const Todo = () => {
    const [tasks,setTask]=useState([ 
    ]);
    useEffect(()=>{
      document.title=`you have ${tasks.length} pending task(s)`;
    })
const addtask=(title)=>{
    const newtask=[...tasks,{title}]
    setTask(newtask);
}
const removeTask=(index)=>{
  const newtask=[...tasks]
   newtask.splice(index,1)
   setTask(newtask)
}
  return (
    <div>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='addtask'>
        <Addtask addtask={addtask}/>
        </div>
        <div className='tasks'>
            {tasks.map((task,index)=>(
              <ListTask task={task} removeTask={removeTask}
              index={index} key={index}/>
            ))}
        
        </div>
        </div>
    </div>
  )
}

export default Todo