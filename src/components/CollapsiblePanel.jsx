import React, { useState } from 'react'
import './CollapsiblePanel.css'
import DisplayList from './DisplayList'

const CollapsiblePanel = ({taskList,name}) => {
    const [isActive, setIsActive]=useState(false)
  return (
    <>
    <div className="co-panel-children" onClick={()=>setIsActive(!isActive)}>
    <div>
      {name} 
    </div>
    <div>{isActive ? '-':'+'}</div>
    </div>
    

     {isActive && <div className="accordion-content"><DisplayList taskList={taskList}/></div>}
     </>
  )
}

export default CollapsiblePanel
