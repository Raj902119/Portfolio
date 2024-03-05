import React from "react";
import "./Projects.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling effect
    });
  };

  return (
    <div className="projects">
      <div className="wrapper">
        <div className="title">
          <h1>Venture into Projects</h1>
          <hr />
        </div>
        <div className="container">
          <div className="content2">
            <div className="card">
              <video  className='video' autoPlay>
                <source src="/youtube.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text">
              <h1>YouTube Clone</h1>
              <h3>PERSONAL PROJECT</h3>
              <hr/>
              <div className="res">
                <h1>My Responsibilites</h1>
                <p>As a frontend developer, I'm always excited to contribute to the web development journey, from concept to launch. In this project inspired by YouTube, I focused on the user interface, leveraging Rapid APIs to implement video search and display functionalities. This project allowed me to hone my frontend skills and gain experience working with external data sources.</p>
              </div>
              <div className="stack">
                <h1>Stack Used</h1>
                <p>HTML, CSS, JS, REACT, RESTAPI, TAILWIND, MATERIAL UI</p>
              </div>
              <div className="link">
              <Link to="/project1" onClick={scrollToTop}>
              <h2>See Details <FaLongArrowAltRight/></h2>
              <hr/>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
