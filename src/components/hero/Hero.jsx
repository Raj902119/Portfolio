import "./Hero.scss"
import React from 'react'
import { motion } from "framer-motion"
const Hero = () => {

  const textvariants = {
    initial:{
      x:-500,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren: 0.1,
      },
    },
  };

  const slidervariants = {
    initial:{
      x:0,
    },
    animate:{
      x: "-220%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:50,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className='hero'>
    <div className="wrapper">
    <motion.div className="textContainer" variants={textvariants} initial="initial" animate="animate">
      <motion.h2 variants={textvariants}>Rajwardhan Patil</motion.h2>
      <motion.h1 variants={textvariants}>Web Developer and UI Designer</motion.h1>
      <motion.div className="btn" variants={textvariants}>
        <motion.button variants={textvariants} onClick={()=>{window.location.href = '#Projects'}}>See the latest work</motion.button>
        <motion.button variants={textvariants} onClick={()=>{window.location.href = '#Contact'}}>Contact Mee!!!</motion.button>
      </motion.div>
    </motion.div>
    <motion.div className="slidetextcontainer" variants={slidervariants} initial="initial" animate="animate">
      <motion.h1 variants={slidervariants}>Productive Innovative Passionate</motion.h1>
    </motion.div>
      <div className='imgContainer'>
        <img src='/hero700.png' alt='Hero image'/>
      </div>
      </div>
    </div>
  )
}

export default Hero
