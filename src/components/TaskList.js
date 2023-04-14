import React from "react";
import Task from './Task'

function TaskList( {taskData, onDeleteTask} ) {
  const allTasks = taskData.map(taskItem => <Task 
    key={taskItem.text} 
    text={taskItem.text} 
    category={taskItem.category}
    onDelete={() => onDeleteTask(taskItem.text)}
    />)

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
