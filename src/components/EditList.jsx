import React from 'react'
import EditListItem from './EditListItem'

const EditList = ({taskList,setTaskList,setDeletedTaskList}) => {
  return (
    
      <div>
        <table>
        <tr>
            <th className="task-name">Edit Task Name</th>
            <th> Mark as complete</th>
            <th>Delete Item</th>
        </tr>
        <tr>
      {taskList.map((task)=>(
        <EditListItem key={task.id} taskItem={task} taskList={taskList} setTaskList={setTaskList} setDeletedTaskList={setDeletedTaskList}/>
        ))}
        </tr>
        </table>
    </div>
    
  )
}

export default EditList
