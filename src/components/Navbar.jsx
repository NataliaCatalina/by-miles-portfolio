import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar () {
  const [ showLinks, setShowLinks ] = useState(false)
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link className='nav-logo' to='/'>BY MILES</Link>
          <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

          <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
            <ul className="links">
                 <Link to='/about'>About/Contact</Link>
            </ul>
            <ul className="social-icons">
              <li>
                <a href='https://vimeo.com/mileswilson' target="_blank" rel='noreferrer'><i className="fab fa-vimeo-v"></i></a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/miles-wilson-7aa2b170/' target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href='https://www.instagram.com/bymiles_nz/' target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>

      </div>
    </nav>


  )
}


export default Navbar
