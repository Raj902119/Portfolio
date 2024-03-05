import React,{useRef,useEffect} from "react";
import "./About.scss";
import { motion,useInView,useAnimation,useIsPresent } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});

  const mainControls = useAnimation();

  useEffect(()=>{
    console.log("Is in view:", isInView);
    if(isInView){
    mainControls.start("visible");
  }
  },[isInView]);

  return (
    <div className="about" ref={ref} style={{position:"relative",width:"fit-content",overflow:"hidden"}}>
      <motion.div className="wrapper" variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0},
      }}
      initial="hidden"
      animate="visible"
      transition={{duration:0.5,delay: 0.25}}
      >
      <div className="title">
        <h1>Technology & Innovation: My Professional Chapter</h1>
        <hr />
      </div>
        <div className="content">
          <div className="lcontent">
            <h1>I've been developing websites since 2020</h1>
            <p>In 2020, I embarked on a technological odyssey, a journey of continuous learning, adaptation, and problem-solving through the lens of technology. My path has taken me through diverse environments, from collaborative ventures in small teams to the dynamic world of startups. Throughout these experiences, I've consistently strived to utilize my technical skills to create positive impacts and contribute to meaningful advancements.</p>
          </div>
          <div className="rcontent">
            <div className="rbox">
                <h1><span className="no">03+</span> Years Doing What I Love </h1>
                <h1><span className="no">10+</span> Projects</h1>
            </div>
                <p>My core philosophy is simple: continuous learning and unwavering adaptability. Each project, regardless of its setting – be it a startup or even a college community – presents a unique opportunity to apply my knowledge and create positive change. I thrive on contributing wherever I can, leaving a positive mark on the world, one line of code at a time.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
