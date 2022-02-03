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
          const { id, image, title, category, categoryImage } = menuProject

          // let categoryClass = ('portfolio-category')
          // if (category === 'Film') {
          //   categoryClass += ' portfolio-category-film'
          // } else if (category === 'Videography'); {
          //   categoryClass =+ ' portfolio-category-videography'
          // } 
        
          return (
            <div key={id}  className="content_card">
              <a
                 onClick={() => changeContent(menuProject)}>
                <img className="card-images" src={`../images/${image}`} alt="" />
                <p className="portfolio-title">{title}</p>
                
                <p className='portfolio-category'>{category}</p>
                {/* <p className={categoryClass}>{category}</p> */}
                {/* <img className="portfolio-category-img" src={`../images/${categoryImage}`} alt="" /> */}

                <div className="overlay"></div>
              </a>
            </div>
          )
        })}
      </div>

      {popTogle && (
        <div className="pop_up_container" onClick={changeContent}>
          <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
            <div className="pop_up_header">
              <button onClick={changeContent}>X</button>
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
