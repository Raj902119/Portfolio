import React from "react";
import "./Project3.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project3 = () => {
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
              <h1>TextIt</h1>
              <h3>PERSONAL PROJECT</h3>
              <hr />
              <div className="res">
                <h1>My Responsibilites</h1>
                <p>
                  Pushing the boundaries of real-time communication, I have
                  developed a robust full-stack chat application that seamlessly
                  integrates cutting-edge features found in the world's leading
                  chat platforms. This comprehensive project showcases my
                  proficiency in crafting immersive user experiences, leveraging
                  advanced technologies, and delivering enterprise-grade
                  functionality.
                </p>
              </div>
              <div className="stack">
                <h1>Stack Used</h1>
                <p>
                HTML, CSS, JS, REACT, RESTAPI, TAILWIND, MATERIAL UI, NODEJS, MONGODB, SOCKET.IO, VERCEL, RENDER  
                </p>
              </div>
              <div className="link">
                <Link to="/project4" onClick={scrollToTop}>
                  <h2>
                    See Details <FaLongArrowAltRight />
                  </h2>
                  <hr />
                </Link>
              </div>
            </div>
            <div className="card">
              <video className="video" autoPlay>
                <source src="/TextIT.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
