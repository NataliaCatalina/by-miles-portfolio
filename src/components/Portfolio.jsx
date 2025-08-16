import { useState } from 'react'

// DATA
import projects from '../data/data'

// COMPONENTS
import Projects from '../components/Projects'
import Categories from '../components/Categories'
const allCategories = ['All', ...new Set(projects.map((item) => item.category))]

function Portfolio() {
  // CONTENT
  const [popContent, setPopContent] = useState(projects)
  const categories = allCategories

  const filterProjects = (category) => {
    if (category === 'All') {
      setPopContent(projects)
      return
    }
    const newProjects = projects.filter((item) => item.category === category)
    setPopContent(newProjects)
  }

  return (
    <>
      <Categories categories={categories} filterProjects={filterProjects} />
      <Projects projects={popContent} />
    </>
  )
}

export default Portfolio
