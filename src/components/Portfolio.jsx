import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// DATA 
import { projects } from '../data/data'


function Portfolio() {
  const [ popContent, setPopContent ] = useState([])
  const changeContent = (project) => {
    setPopContent([project])
  }
  return (
    <>
      <div className="portfolio_container">
        <div className="content_container">
          {projects.map(( project ) => {
            return (
              <div key={project.id}>
                <a className="content_card" onClick={()=> changeContent(project)}>
                  <img
                    className="card-images"
                    src={`../images/${project.image}`}
                    alt=""
                  />
                  <p className="portfolio_text">{project.title}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="pop_up_container">
          <div className="pop_up_header">
            <button>X</button>
          </div>
          <div className="pop_up_content">
            {popContent.map((pop)=>{
              return (
                <div key={pop}> 
                  <div className="pop_up_card" >
                    <p>test</p>
                    <p>name: {pop.title} </p>
                    <p>category: {pop.category}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
