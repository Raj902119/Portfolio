import React from "react";
import "./ProjectDetail.scss";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";

const ProjectDetail3 = () => {
  const redirectToGithub = () => {
    window.open("https://text-it-frontend.vercel.app/", "_blank");
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
          <h1>TextIt</h1>
          <p>
            With a passion for seamless communication and real-time interaction,
            I have crafted Textit, a robust full-stack chat application that
            harnesses the power of Socket.IO to deliver an unparalleled
            real-time chat experience. This project showcases my proficiency in
            leveraging cutting-edge technologies like React for the frontend,
            Node.js for the backend, and Socket.IO for bidirectional event-based
            communication. Textit not only facilitates instantaneous message
            exchange but also incorporates advanced features found in leading
            chat platforms, such as secure user authentication, creating groups
            with friends, sharing various docuemnts.I have demonstrated my
            ability to architect scalable and responsive web applications,
            combining user-centric design principles with robust security
            measures to ensure a delightful and reliable experience for all
            users.
          </p>
          <button onClick={redirectToGithub}>
            Application Link Here <IoIosLink />
          </button>
        </div>
        <div className="video">
          <video autoPlay>
            <source src="/TextIT.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about1">
          <h1>About the project</h1>
          <p>
            Introducing a fully functioning TextIt chat application platform
            built from the ground up to provide a seamless and secure online
            communication expirence.
          </p>
          <ul>
            <li>Secure user registration and login with Passport.js</li>
            <li>
              JWT-based authentication for data integrity and user authorization
            </li>
            <li>Responsive and interactive user interface across devices</li>
            <li>Efficient state management with Redux Toolkit</li>
            <li>Real-time communication with Socket.IO</li>
            <li>
              Modular backend architecture with Node.js (modules, controllers,
              routes)
            </li>
            <li>MongoDB as the NoSQL database for data storage</li>
            <li>
              Admin panel for monitoring user activity, message logs, and
              application insights
            </li>
            <li>
              Focus on security, responsiveness, and real-time communication
            </li>
          </ul>
          <h2>What was the goal of the project</h2>
          <p>
            The journey of developing this chat application has been an
            invaluable learning experience, allowing me to progress from
            crafting user-friendly frontends with React to embarking on the
            realm of full-stack development, seamlessly integrating React with
            Node.js. Along this path, I tackled the multifaceted challenges of
            mastering both the frontend and backend aspects. I delved into
            securing user data through robust authentication mechanisms like JWT
            and Passport.js, instilling a deep understanding of data integrity
            and access control. Furthermore, I honed my skills in building
            user-friendly e-commerce platforms, adeptly integrating third-party
            APIs to augment functionality and enhance the overall user
            experience. This immersive project has kindled a profound passion
            within me - a relentless drive for continuous learning and an
            unwavering commitment to creating engaging, secure, and cutting-edge
            web experiences that captivate and empower users across diverse
            domains.
          </p>
          <h2>Technologies Used</h2>
          <p>
            HTML, CSS, JS, REACT, RESTAPI, TAILWIND, MATERIAL UI, NODEJS,
            MONGODB, SOCKET.IO, VERCEL, RENDER
          </p>
          <h2>Future Plans for the project</h2>
          <p>
            The next step is deploying the project onto a reliable hosting
            platform for wider accessibility. The project is continuously
            evolving, with plans to integrate additional features for an
            enhanced user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail3;
