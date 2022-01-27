import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// DATA 
import { Projects } from '../data/data'


function Portfolio() {
  return (
    <>
      <div className="portfolio_container">
        <div className="content_container">
          {Projects.map(({ id, title, image }) => {
            return (
              <div key={id}>
                <Link className="content_card" to={`${id}`}>
                  <img
                    className="card-images"
                    src={`../images/${image}`}
                    alt=""
                  />
                  <p className="portfolio_text">{title}</p>
                  <button>Detail</button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="pop_up_container">
          <div className="pop_upheader">
            <button>X</button>
          </div>
          <div className="pop_up_content">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
