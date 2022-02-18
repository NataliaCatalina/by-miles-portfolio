import React from 'react';

function About () {
  return (

    <div className='about_container'>
      <div className='image_container'>
        <img className='about-image' src='../images/MilesWilson.jpg' alt="Black and white portrait of Miles Wilson" />
      </div>
      <div className='information_container'>
        <h1>Contact Me</h1>
        <div className='line'></div>
        <p>
          I'm based in Wellington, NZ, and call the suburb of Brooklyn home. Always keen on a coffee and a chat!
        </p>
        <p>
          Feel free to drop me a line, or flick out an email.
        </p>
        <p>Email: <a href = "mailto: bymiles.nz@gmail.com">bymiles.nz@gmail.com</a></p>
        <p>Tel: <a href="tel:+6421 126 2046">+6421 126 2046</a></p>
      </div>
    </div>

  )
}

export default About;
