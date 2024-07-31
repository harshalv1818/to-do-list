import React from 'react'

const EditListItem = ({taskItem,taskList,setTaskList}) => {

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
          isComplete: !item.isComplete,
        });
    
        setTaskList(newList);
      };

      const deleteItem = () => {
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
    <div>
      <input type="text" value={taskItem.task} onChange={editItemText} />
      <input
        type="checkbox"
        checked={taskItem.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

export default EditListItem
