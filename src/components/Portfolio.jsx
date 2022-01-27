import React, { useState, useEffect } from 'react';

// DATA 
import { Projects } from '../data/data'


function Portfolio() {
  return (
    <>
      <div className="portfolio_container">
        <div className="content_container">
          {
            Projects.map((project)=> {
              return (
                <div className="content_card">
                  <img src={`../images/${project.image}`} alt='' />
                  <p className='portfolio_text'>{project.title}</p>
                  <button>Details</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Portfolio
