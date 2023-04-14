import React from "react";

function CategoryFilter( {categoryData, selectedCategory, onSelectCategory} ) {
  const categoryButtons = categoryData.map((category) => {
    const className = category === selectedCategory ? 'selected' : ''
    return (
    <button
    key={category}
    className={className}
    onClick={() => onSelectCategory(category)}
    >
      {category}
    </button>
    )
  })

  return (
    <div className="categories">
      <h5>Filter Tasks:</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
