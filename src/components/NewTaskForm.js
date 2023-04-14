import React, { useState } from "react";

function NewTaskForm( {categoryData, onTaskFormSubmit} ) {
  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  const categoryOptions = categoryData.filter(category => category !== 'All').map((category) => {
    return (
      <option key={category} value={category}>{category}</option>
    )
  })

  function handleChange(e) {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: '',
      category: 'Code'
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
