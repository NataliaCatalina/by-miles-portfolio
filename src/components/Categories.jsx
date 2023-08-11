import { useState } from 'react'

function Categories({ categories, filterProjects }) {
  const [activeCategory, setActiveCategory] = useState(null)

  const handleFilterClick = (category) => {
    filterProjects(category)
    setActiveCategory(category)
  }

  return (
    <div className="category-btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className={`filter-btn ${
              activeCategory === category ? 'active' : ''
            }`}
            type="button"
            key={index}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
