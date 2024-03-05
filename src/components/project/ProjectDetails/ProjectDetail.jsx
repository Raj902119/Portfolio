import React from "react";
import "./ProjectDetail.scss";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import Footer from "../../footer/Footer";

const ProjectDetail = () => {

  const redirectToGithub = () => {
    window.open("https://github.com/Raj902119/YoutubeClone", "_blank");
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
        <h1>Youtube Clone</h1>
        <p>
          This project is a reimagining of the popular video platform, YouTube.
          I built it from the ground up, focusing on the frontend
          functionalities and utilizing Rapid APIs to enhance the user
          experience.
        </p>
        <button onClick={redirectToGithub}>Github Link Here <IoIosLink /></button>
      </div>
      <div className="video">
        <video autoPlay>
          <source src="/youtube.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="about1">
        <h1>About the project</h1>
        <p>
          This project reimagines the popular video platform, YouTube, with a
          focus on user experience and modern technologies. Built using React,
          Material-UI, HTML, and CSS, it offers a responsive and immersive user
          interface.
        </p>
        <ul>
          <li>
            <spam>Search Functionality:</spam> Users can seamlessly search for
            videos through the integrated YouTube Search API (via Rapid API),
            ensured by Axios for data fetching.
          </li>
          <li>
            <spam>Video Playback:</spam> The platform allows users to watch
            retrieved videos directly within the clone application, enhancing
            the user experience.
          </li>
          <li>
            <spam>Visual Design:</spam> Material-UI components contribute to a
            visually appealing and consistent user interface.
          </li>
          <li>
            <spam>State Management:</spam> Efficient state management using
            React ensures a smooth and interactive experience.
          </li>
        </ul>
        <h2>What was the goal of the project</h2>
        <p>
          Replicate core functionalities of YouTube while emphasizing user
          experience and modern technologies. Showcase your expertise in
          front-end development, API integration, and project deployment. Gain
          practical experience in building a web application with real-world
          functionalities.
        </p>
        <h2>Technologies Used</h2>
        <p>React, Material-UI, HTML, CSS, TAILWIND, Axios, Netlify</p>
        <h2>Future Plans for the project</h2>
        <p>
          Replicate core functionalities of YouTube while emphasizing user
          experience and modern technologies. Showcase your expertise in
          front-end development, API integration, and project deployment. Gain
          practical experience in building a web application with real-world
          functionalities.
        </p>
      </div>
    </div>
    </div>
  );
};

export default ProjectDetail;
