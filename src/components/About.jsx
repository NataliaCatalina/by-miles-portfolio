import milesWilson from '../images/miles-wilson.jpg';


function About() {
  return (
    <div className="about_container">
      <div className="image_container">
        <img
          className="about-image"
          src={milesWilson}
          alt="Black and white portrait of Miles Wilson"
        />
      </div>
      <div className="information_container">
        {/* <h1>Contact Me</h1> */}
        <div className="line"></div>
        <p>
         As an experienced VFX Artist, 3D Freelancer and Animator, I’ve developed a broad skillset that has allowed me to contribute to a diverse set of projects. I actively maintain positive and collaborative working environments, and am most engaged in my work when it is at its most challenging.
        </p>
        <p>
        I have worked on 3D animated films, kids TV shows, tentpole VFX films, and indie shorts. I am experienced in a wide range of software, including Maya, Houdini, Unreal Engine, Katana, Blender, Substance Painter, Nuke, DaVinci Resolve, and many more.
        </p>
        <p>Feel free flick out an email.</p>
        <p>
          Email: <a href="mailto: bymiles.nz@gmail.com">bymiles.nz@gmail.com</a>
        </p>

      </div>
    </div>
  )
}

export default About
