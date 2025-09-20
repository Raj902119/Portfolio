import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Expirence from "../expirence/Expirence";
import Projects from "../project/Projects";
import Project1 from "../project/Project1";
import Project2 from "../project/Project2";
import About from "../about/About"
import Skills from "../skills/Skills"
import Contact from "../contact/Contact";

import "./Home.scss";

import React from 'react'
import Footer from "../footer/Footer";
import Project3 from "../project/Project3";

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
