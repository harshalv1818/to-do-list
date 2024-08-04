import { useEffect, useState } from 'react'

import './App.css'
import ListItem from './components/ListItem'
import TodoItemCreator from './components/TodoItemCreator'
import CollapsiblePanel from './components/CollapsiblePanel'
import DisplayList from './components/DisplayList'
import EditList from './components/EditList'
import DonutChart from './components/DonutChart'

function App() {
  const [taskList, setTaskList] = useState([])
  const [completedTaskList, setCompletedTaskList] = useState([])
  const [uncompletedTaskList, setUompletedTaskList] = useState([])
  const [deletedTaskList, setDeletedTaskList] = useState([])

  useEffect(()=>{
    if(!taskList)
    {
      console.log("No items present");
    }
    else{
      let newList = taskList.filter((task)=>task.isComplete)
      setCompletedTaskList(newList);

      let newList2 = taskList.filter((task)=>!task.isComplete)
      setUompletedTaskList(newList2);

    }

    console.log(deletedTaskList);
  },[taskList])

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
        <EditList taskList={taskList} setTaskList={setTaskList} setDeletedTaskList={setDeletedTaskList}/>
          

        </div>
         
        <div className="container-panel">
          

          <div className="co-panel"><CollapsiblePanel taskList={completedTaskList} name="Show Completed Tasks"/></div>
          <div className="co-panel"><CollapsiblePanel taskList={uncompletedTaskList} name="Show Uncompleted Tasks"/></div>
          <div className="co-panel"><CollapsiblePanel taskList={deletedTaskList} name="Show Deleted Tasks"/></div>

          </div>


        <div className="container-panel">
        <h3>Statistics</h3>
          <div id='donut-chart'><DonutChart tasksDone={completedTaskList.length} tasksNotDone={uncompletedTaskList.length} tasksDeleted={deletedTaskList.length}/></div>
          <h4>Number of tasks done : {completedTaskList.length}</h4>
          <h4>Number of tasks not done : {uncompletedTaskList.length}</h4>
          <h4>Number of tasks deleted : {deletedTaskList.length}</h4>
          </div>

      </div>

      
    </>
  )
}

export default App
