import React, { useState } from 'react'

function Projects({ projects }) {
  const [popContent, setPopContent] = useState([])
  const [popTogle, setPopTogle] = useState(false)
  const [styling, setStyling] = useState(null)
  const changeContent = (menuProject) => {
    setPopContent([menuProject])
    setPopTogle(!popTogle)
    if (styling === null) {
      setStyling({
        position: 'fixed',
      })
    } else {
      setStyling(null)
    }
  }

  return (
    <div className="portfolio_container">
      <div className="content_container" style={styling}>
        {projects.map((menuProject) => {
          const { id, image, title, category, categoryClass } = menuProject

          return (
            <div key={id} className="content_card">
              <div onClick={() => changeContent(menuProject)}>
                <img
                  className="card-images"
                  src={require(`../images/${image}`)}
                  alt="Thumbnail of the project"
                />
                <p className="portfolio-title">{title}</p>
                <p className={'portfolio-category ' + categoryClass}>
                  {category}
                </p>
                <div className="overlay"></div>
              </div>
            </div>
          )
        })}
      </div>

      {popTogle && (
        <div className="pop_up_container" onClick={changeContent}>
          <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
            <div className="pop_up_header">
              <button onClick={changeContent}>
                <i class="fas fa-times-circle"></i>
              </button>
            </div>
            <div className="pop_up_content">
              {popContent.map((pop) => {
                return (
                  <div key={pop}>
                    <div className="pop_up_card">
                      <span
                        dangerouslySetInnerHTML={{ __html: pop.embed }}
                      ></span>
                      <p className="video-description">{pop.description}</p>
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
