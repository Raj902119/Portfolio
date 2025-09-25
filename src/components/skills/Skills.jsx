import React from "react";
import "./Skills.scss";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";


const Skills = () => {
  return (
    <div className="skills">
      <div className="wrapper">
        <div className="heading">
          <h1>Technologies I've worked with</h1>
          <hr />
        </div>
        <div className="content">
          <div className="box">
            <FaCode className="icon" />
            <h1>C++</h1>
            <hr />
          </div>
          <div className="box">
            <FaHtml5 className="icon" />
            <h1>HTML</h1>
            <hr />
          </div>
          <div className="box">
            <FaCss3Alt className="icon"  />
            <h1>CSS</h1>
            <hr />
          </div>
          <div className="box">
            <IoLogoJavascript className="icon" />
            <h1>JavaScript</h1>
            <hr />
          </div>
          <div className="box">
            <FaReact className="icon" />
            <h1>React</h1>
            <hr />
          </div>
          <div className="box">
            <SiNextdotjs className="icon" />
            <h1>Next</h1>
            <hr />
          </div>
          <div className="box">
            <SiTailwindcss className="icon" />
            <h1>Tailwind</h1>
            <hr />
          </div>
          <div className="box">
            <FaPython className="icon" />
            <h1>Python</h1>
            <hr />
          </div>
          <div className="box">
            <FaNode className="icon" />
            <h1>Node</h1>
            <hr />
          </div>
          <div className="box">
            <SiMongodb className="icon" />
            <h1>Mongodb</h1>
            <hr />
          </div>
          <div className="box">
            <TbBrandMysql className="icon" />
            <h1>Mysql</h1>
            <hr />
          </div>
          <div className="box">
            <FaDatabase className="icon" />
            <h1>Database</h1>
            <hr />
          </div>
          <div className="box">
            <FaAws className="icon" />
            <h1>AWS</h1>
            <hr />
          </div>
          <div className="box">
            <FaGitSquare className="icon" />
            <h1>Git</h1>
            <hr />
          </div>
          <div className="box">
            <FaGithub className="icon" />
            <h1>GitHub</h1>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
