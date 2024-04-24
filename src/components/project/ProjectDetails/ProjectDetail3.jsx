import React from 'react'
import "./ProjectDetail.scss"
import { Link } from 'react-router-dom';
import { IoIosLink } from "react-icons/io";

const ProjectDetail3 = () => {

  const redirectToGithub = () => {
    window.open("https://github.com/Raj902119/ecommerce-project", "_blank");
  };

  return (
    <div className="project1">
      <div className="wrapper">
        <div className="home">
          <Link to="/">
            <h3>Back to Home</h3>
          </Link>
          <hr />
        </div>
        <div className="dis">
          <hr />
          <h1>Ecommerce</h1>
          <p>
          My passion lies in crafting user-friendly and responsive web applications using modern technologies like React and Node.js. I embrace the challenges of full-stack development, seamlessly connecting the frontend and backend to create robust and secure experiences. My expertise extends to implementing secure user authentication and authorization mechanisms like JWT and Passport.js, ensuring data integrity and access control. This skillset allows me to build feature-rich e-commerce platforms with user-friendly interfaces, while seamlessly integrating third-party APIs to enhance functionality and provide valuable resources to users. In essence, I strive to combine cutting-edge technologies with a user-centric approach, delivering engaging and secure web applications.
          </p>
          <button onClick={redirectToGithub}>
            Github Link Here <IoIosLink />
          </button>
        </div>
        <div className="video">
          <video autoPlay>
            <source src="/ecommerce.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about1">
          <h1>About the project</h1>
          <p>
          Introducing a fully functioning e-commerce platform built from the ground up to provide a seamless and secure online shopping experience.
          </p>
          <ul>
            <li>
              <spam>Comprehensive Product Catalog:</spam> Secure user registration and login functionalities powered by Passport.js for user management.
            </li>
            <li>
              <spam>JWT-Based Authentication:</spam>Every resource request is secured with JWT (JSON Web Token) authentication, ensuring data integrity and user authorization.
            </li>
            <li>
              <spam>Responsive User Interface:</spam>Experience a user-friendly and interactive interface that adapts seamlessly across various devices.
            </li>
            <li>
              <spam>State Management:</spam>Efficient state management is achieved with Redux Toolkit, guaranteeing a smooth and responsive user experience.
            </li>
            <li>
              <spam>Payment Integration:</spam>Secure and convenient payment processing is facilitated through Razorpay integration.
            </li>
            <li>
              <spam>Backend Infrastructure:</spam>The robust backend is built upon MongoDB, a popular NoSQL database, and Node.js, enabling a JavaScript-based server environment.
            </li>
            <li>
              <spam>Admin Panel:</spam>Empowering administrators with dedicated functionalities to view, edit, and manage products, order statuses, and customer details.
            </li>
          </ul>
          <h2>What was the goal of the project</h2>
          <p>
            It was great learning expirence, crafting user-friendly apps (React) and progressed to full-stack development (React & Node.js), tackling the challenges of both front-end and back-end. I learned to secure user data with tools like JWT and Passport.js, and built user-friendly e-commerce platforms, integrating APIs to enhance functionality. This journey instilled a passion for continuous learning and creating engaging, secure web experiences.
          </p>
          <h2>Technologies Used</h2>
          <p>
            React, HTML, CSS, API, Redux Toolkit, Node.js, MongoDB, Passport.js, JWT, Razorpay
          </p>
          <h2>Future Plans for the project</h2>
          <p>
          The next step is to deploy the project onto a reliable hosting platform, making it accessible to a wider audience. The project is continuously evolving, with future plans to integrate additional features to further enhance the user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail3
