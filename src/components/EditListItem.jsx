import React from 'react'

const EditListItem = ({taskItem,taskList,setTaskList,setDeletedTaskList}) => {

    const index = taskList.findIndex((listItem) => listItem === taskItem);

    const editItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(taskList, index, {
          ...taskItem,
          task: value,
        });
    
        setTaskList(newList);
      };
    
      const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(taskList, index, {
          ...taskItem,
          isComplete: !taskItem.isComplete,
        });
    
        setTaskList(newList);
      };

      const deleteItem = () => {
        
        const dt =taskList.filter((task)=>task==taskItem)
        setDeletedTaskList((list)=>[...list,...dt])
        const newList = removeItemAtIndex(taskList, index);
    
        setTaskList(newList);
        
      };

      function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      }
      
      function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }
  return (
    
    <>
      <td><input className="task-name" type="text" value={taskItem.task} onChange={editItemText} /></td>
      <td><input
        type="checkbox"
        checked={taskItem.isComplete}
        onChange={toggleItemCompletion}
      /></td>
      <td><button onClick={deleteItem}>X</button></td>
      </>
  )
}

export default EditListItem
