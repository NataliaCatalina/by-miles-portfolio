import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      
      <ul>
        <li>
          <Link to='/'>BY MILES</Link>
        </li>
        <li>
          <Link to='/animation'>Animation</Link>
        </li>
        <li>
          <Link to='/film'>Film</Link>
        </li>
        <li>
          <Link to='/about'>About/Contact</Link>
        </li>
      </ul>
      
    </nav>
  )
}


export default Navbar
