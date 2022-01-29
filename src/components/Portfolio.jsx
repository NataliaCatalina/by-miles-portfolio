import React, { useState, useEffect } from "react"
// import { Link } from 'react-router-dom'

// DATA
import projects from "../data/data"

// COMPONENTS
import Projects from "../components/Projects"
import Categories from "../components/Categories"
const allCategories = ["all",...new Set(projects.map((item) => item.category)),]
// console.log(allCategories)

function Portfolio() {
  // CONTENT
  const [popContent, setPopContent] = useState(projects)
  const [categories, setCategories] = useState(allCategories)

  const filterProjects = (category) => {
    if (category === "all") {
      setPopContent(projects)
      return;
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
