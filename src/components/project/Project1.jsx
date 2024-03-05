import React from 'react'
import "./Project1.scss"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Project1 = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling effect
    });
  };

  return (
    <div className="projects">
      <div className="wrapper">
        <div className="container">
          <div className="content2">
          <div className="text">
              <h1>FlexVisuals</h1>
              <h3>PERSONAL PROJECT</h3>
              <hr/>
              <div className="res">
                <h1>My Responsibilites</h1>
                <p>Expanding my frontend skillset, I built this fitness website leveraging the power of two Rapid APIs. By integrating these APIs, I created a user-friendly platform that allows users to access valuable resources and functionalities. This project showcases my ability to build engaging user interfaces and effectively utilize external data sources to enhance the user experience.</p>
              </div>
              <div className="stack">
                <h1>Stack Used</h1>
                <p>HTML, CSS, JS, REACT, RESTAPI, TAILWIND, MATERIAL UI, Netlify</p>
              </div>
              <div className="link">
              <Link to="/Project2" onClick={scrollToTop}>
              <h2>See Details <FaLongArrowAltRight/></h2>
              <hr/>
              </Link>
              </div>
            </div>
            <div className="card">
              <video  className='video' autoPlay>
                <source src="/fitness.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project1
