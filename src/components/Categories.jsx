import React from "react"

function Categories({ categories, filterProjects }) {
  return (
    <div className="category-btn-container">
      {categories.map((category, index) => {
        return (
          <button className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
