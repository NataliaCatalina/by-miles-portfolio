import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      
      <ul className='navbar'>
        <li>
          <Link className='nav-logo' to='/'>BY MILES</Link>
        </li>
        <li>
          <Link to='/about'>About/Contact</Link>

            <a href='https://vimeo.com/mileswilson' target="_blank" rel='noreferrer'><i className="fab fa-vimeo-v"></i></a>
            <a href='https://www.linkedin.com/in/miles-wilson-7aa2b170/' target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in"></i></a>
            <a href='https://www.instagram.com/bymiles_nz/' target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>

        </li>
      </ul>
      
    </nav>
  )
}


export default Navbar
