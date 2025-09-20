import React from "react";
import { IoIosLink } from "react-icons/io";
import "./ProjectDetail.scss";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

const ProjectDetail2 = () => {
  const redirectToGithub = () => {
    window.open("https://github.com/Raj902119/Rj-FlexVisual", "_blank");
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
          <h1>FlexVisual</h1>
          <p>
            Building user-friendly and responsive web applications using modern
            technologies like React and Material-UI.Effectively integrating
            external APIs to enhance functionality and provide valuable
            resources for users.Creating a comprehensive and informative
            platform that caters to the diverse needs of fitness enthusiasts.
          </p>
          <button onClick={redirectToGithub}>
            Github Link Here <IoIosLink />
          </button>
        </div>
        <div className="video">
          <video autoPlay>
            <source src="/fitness.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about1">
          <h1>About the project</h1>
          <p>
            Imagine a virtual personal trainer readily available at your
            fingertips, guiding you through every step of your fitness journey.
            Fitness Companion brings this vision to life, offering a
            comprehensive and user-friendly platform to empower all fitness
            levels.
          </p>
          <ul>
            <li>
              <spam>Extensive Exercise Library:</spam> Explore a vast collection
              of exercises powered by the "Exercise DB" Rapid API, providing a
              diverse range of options for any workout plan.
            </li>
            <li>
              <spam>Visual Demonstration:</spam>Each exercise is accompanied by
              clear visual guides, ensuring proper form and technique for
              effective and safe workouts.
            </li>
            <li>
              <spam>Detailed Exercise Pages:</spam>Deep dive into specific
              exercises with dedicated pages that showcase detailed
              descriptions, targeted muscle groups, and required equipment.
            </li>
            <li>
              <spam>YouTube Video Integration:</spam>Leverage another Rapid API
              service to seamlessly integrate relevant YouTube videos alongside
              each exercise, enhancing your understanding through additional
              visual learning resources.
            </li>
            <li>
              <spam>Search Functionality:</spam>Locate the perfect exercise for
              your needs with a powerful search bar, allowing you to filter by
              keyword or specific muscle group, streamlining your workout
              planning.
            </li>
            <li>
              <spam>Accessible Platform:</spam>The project is conveniently
              deployed on Netlify, providing a reliable and accessible online
              platform for all fitness enthusiasts, regardless of device.
            </li>
          </ul>
          <h2>What was the goal of the project</h2>
          <p>
            Provide a comprehensive and informative resource to guide
            individuals of all fitness levels on their fitness journeys. Combine
            user-friendly design with valuable functionalities to ensure a
            smooth and engaging workout experience. Utilize various technologies
            and APIs to demonstrate proficiency in building interactive and
            informative web applications.
          </p>
          <h2>Technologies Used</h2>
          <p>
            React, Material-UI, HTML, CSS, Axios, API's(Exercise DB & YouTube
            Search), Netlify, TAILWIND
          </p>
          <h2>Future Plans for the project</h2>
          <p>
            Implement user accounts and login functionalities to enable
            personalized workout routines and track progress for individual
            users. Integrate features like calorie tracking and compatibility
            with fitness trackers, promoting a holistic approach to
            wellness.Introduce social features such as workout challenges and
            community interaction pages, fostering a sense of support and
            motivation among users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail2;
