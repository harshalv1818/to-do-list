import { useState } from 'react'

import './App.css'
import ListItem from './components/ListItem'
import TodoItemCreator from './components/TodoItemCreator'
import CollapsiblePanel from './components/CollapsiblePanel'
import DisplayList from './components/DisplayList'
import EditList from './components/EditList'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
      <div className="header">
      <h1>Todo List Application</h1>
      <TodoItemCreator  setTaskList={setTaskList}/>
      </div>

      <div className="container">

        <div className="container-panel">

          <h3>All Tasks</h3>

        {/* <DisplayList taskList={taskList}/> */}
        <EditList taskList={taskList} setTaskList={setTaskList}/>
          

        </div>
         
        <div className="container-panel">
          

          <div className="co-panel"><CollapsiblePanel taskList={taskList} name="Show Completed Tasks"/></div>
          <div className="co-panel"><CollapsiblePanel taskList={taskList} name="Show Uncompleted Tasks"/></div>
          <div className="co-panel"><CollapsiblePanel taskList={taskList} name="Show Deleted Tasks"/></div>

          </div>


        <div className="container-panel">
        <h3>Statistics</h3>
          </div>

      </div>

      
    </>
  )
}

export default App
