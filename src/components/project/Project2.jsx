import React from 'react'
import "./Project2.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Project2 = () => {

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
          <div className="card">
              <video  className='video' autoPlay>
                <source src="/ecommerce.mp4" type="video/mp4" />
              </video>
            </div>
          <div className="text">
              <h1>Ecommerce</h1>
              <h3>INTERNSHIP PROJECT</h3>
              <hr/>
              <div className="res">
                <h1>My Responsibilites</h1>
                <p>This e-commerce website demonstrates my full-stack development skills, encompassing both backend and frontend development. From designing the database and APIs to creating a user-friendly shopping experience, I built this project from the ground up.</p>
              </div>
              <div className="stack">
                <h1>Stack Used</h1>
                <p>HTML, CSS, JS, REACT, RESTAPI, TAILWIND, NODEJS, MONGODB, RAZORPAY</p>
              </div>
              <div className="link">
              <Link to="/Project3" onClick={scrollToTop}>
              <h2>See Details <FaLongArrowAltRight/></h2>
              <hr/>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2
