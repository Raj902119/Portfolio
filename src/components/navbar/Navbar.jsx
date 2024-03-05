import React from 'react'
import "./Navbar.scss"
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
          <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>PORTFOLIO</motion.span>
          <div className='list'>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='#Home'>Home</motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href="#About">About</motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='#Expirence'>Expirence</motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='#Skills'>Skills</motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='#Projects'>Projects</motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='#Contact'>Contact</motion.a>

          </div>
          <div className='items'>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='https://github.com/Raj902119'><img src='/github.png'/></motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='https://www.linkedin.com/in/rajpatil7517'><img src='/linkedin.png'/></motion.a>
          <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} href='https://www.instagram.com/raj.patil_7777'><img src='/instagram.png'/></motion.a>
          </div>
      </div>
    </div>
  )
}

export default Navbar
