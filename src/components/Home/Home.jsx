import Navbar from "../navbar/Navbar.jsx";
import Hero from "../hero/Hero.jsx";
import Expirence from "../expirence/Expirence.jsx";
import Projects from "../project/Projects.jsx";
import Project1 from "../project/Project1.jsx";
import Project2 from "../project/Project2.jsx";
import About from "../about/About.jsx";
import Skills from "../skills/Skills.jsx";
import Contact from "../contact/Contact.jsx";

import "./Home.scss";

import React from 'react'
import Footer from "../footer/Footer.jsx";
import Project3 from "../project/Project3.jsx";

const Home = () => {
  return (<div className="webapp">
  <section id="Home">
    <Navbar />
    <Hero />
  </section>
  <section id="About">
    <About />
  </section>
  <section id="Expirence">
    <Expirence />
  </section>
  <section id="Skills">
    <Skills />
  </section>
  <section id="Projects">
    <Projects />
  </section>
  <section id="Project1">
    <Project1 />
  </section>
  <section id="Project2">
    <Project2 />
  </section>
  <section id="Project3">
    <Project3 />
  </section>
  <section id="Contact">
    <Contact />
    <Footer />
  </section>
</div>);
}

export default Home
