import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// DATA 
import { projects } from '../data/data'


function Portfolio() {
  const [ popContent, setPopContent ] = useState([])
  const [ popTogle, setPopTogle] = useState(false)
  const changeContent = (project) => {
    setPopContent([project])
    setPopTogle(!popTogle)
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
        {popTogle&&<div className="pop_up_container" onClick={changeContent}>
          <div className="pop_up_body" onClick={(e)=>e.stopPropagation()}>
            <div className="pop_up_header">
              <button onClick={changeContent}>X</button>
            </div>
            <div className="pop_up_content">
              {popContent.map((pop)=>{
                return (
                  <div key={pop}> 
                    <div className="pop_up_card" >
                      {/* <p>test</p> */}
                      {/* <p>name: {pop.title} </p> */}
                      {/* <p>category: {pop.category}</p> */}
                      <span dangerouslySetInnerHTML={{ __html: pop.embed }}></span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Portfolio
