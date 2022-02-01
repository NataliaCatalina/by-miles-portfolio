import React, { useState, useEffect } from "react"

function Projects({ projects }) {
  const [popContent, setPopContent] = useState([])
  const [popTogle, setPopTogle] = useState(false)
  const changeContent = (menuProject) => {
    setPopContent([menuProject]);
    setPopTogle(!popTogle);
  }

  return (
    <div className="portfolio_container">
      <div className="content_container">
        {projects.map((menuProject) => {
          const { id, image, title, category } = menuProject
          return (
            <div key={id}>
              <a
                className="content_card"
                onClick={() => changeContent(menuProject)}>
                <img
                  className="card-images"
                  src={`../images/${image}`}
                  alt=""
                />
                <div className="portfolio_text">
                  <p className="portfolio_text-title">{title}</p>
                  <p className="portfolio_text-category">{category}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>

      {popTogle && (
        <div className="pop_up_container" onClick={changeContent}>
          <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
            <div className="pop_up_header">
              <button onClick={chaategory-btn-containerngeContent}>X</button>
            </div>
            <div className="pop_up_content">
              {popContent.map((pop) => {
                return (
                  <div key={pop}>
                    <div className="pop_up_card">
                      {/* <p>test</p> */}
                      {/* <p>name: {pop.title} </p> */}
                      {/* <p>category: {pop.category}</p> */}
                      <span
                        dangerouslySetInnerHTML={{ __html: pop.embed }}
                      ></span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
