import React from 'react'

function Footer() {
  return (
    <footer>
      <ul className="social-icons-footer">
        <li>
          <a
            href="https://vimeo.com/mileswilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-vimeo-v"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/miles-wilson-7aa2b170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bymiles.nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <p>© 2023 BY MILES</p>
      <p>
        {' '}
        Developed by &nbsp;
        <a
          href="https://www.nataliacatalina.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natalia Catalina
        </a>
      </p>
    </footer>
  )
}

export default Footer
