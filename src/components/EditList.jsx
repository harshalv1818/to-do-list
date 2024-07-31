import React from 'react'
import EditListItem from './EditListItem'

const EditList = ({taskList,setTaskList}) => {
  return (
    
      <div>
      {taskList.map((task)=>(
        <EditListItem key={task.id} taskItem={task} taskList={taskList} setTaskList={setTaskList}/>
        ))}
    </div>
    
  )
}

export default EditList
