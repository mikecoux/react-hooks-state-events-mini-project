import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [allTasks, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleSelectCategory(key) {
    setSelectedCategory(key);
  }

  function handleDelete(key) {
    setTaskList(allTasks.filter(task => task.text !== key))
  }

  function handleNewTask(task) {
    setTaskList([...allTasks, task])
  }

  const showTasks = allTasks
  .filter(task => selectedCategory === 'All' ? true : task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryData={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      <NewTaskForm categoryData={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList taskData={showTasks} onDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;
