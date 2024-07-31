import React from 'react'
import ListItem from './ListItem'

const DisplayList = ({taskList}) => {
  return (
    <div>
      {taskList.map((item)=>(
        <ListItem key={item.id} id={item.id} name={item.task}/>
        ))}
    </div>
  )
}

export default DisplayList
