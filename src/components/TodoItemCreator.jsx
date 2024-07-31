import React, { useState } from 'react'

let id =0;

let getId =()=>{
    return ++id;
}



const TodoItemCreator = ({setTaskList}) => {
    const [task,setTask] =useState("");
    
  return (
    <div>
      <label htmlFor="item">Enter task to add to the list </label>
      <input type="text" id="item" onChange={(e)=>{
        setTask(e.target.value);
      }}/>

      
      <button style={{marginLeft:'2rem'}}onClick={()=>{
        setTaskList((oldList)=>[...oldList,{id:getId(),task:task,completed:false},])
       
        

      }}>Add task</button>
    
    </div>
  )
}

export default TodoItemCreator
