import React from "react"

function Categories({ categories, filterProjects }) {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
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
