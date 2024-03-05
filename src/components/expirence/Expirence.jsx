import React from 'react'
import "./Expirence.scss";

const Expirence = () => {
  return (
    <div className='expirence'>
    <div className='wrapper'>
    <div className='lcol'>
    <div className='content'>
    <div className='title'>
      <h1>
        Expirence:
      </h1>
      <hr />
    </div>
      <div className='upcon'>
        <img src='/logo.png' alt='company logo' />
        <div className='hed'>
          <h1>Spark Innovations</h1>
          <hr />
          <h2>Front End Developer</h2>
        </div>
      </div>
      <div className='downcon'>
        <p>Spark Innovations is passionate about empowering innovation by providing resources for aspiring creators and engineers. They offer a range of services, including wholesale electronics components, tailor-made projects for engineering students, and engaging workshops.</p>
      </div>
    </div>
    </div>
    <div className='rcol'>
      <ul>
        <li>Spearheaded the development of Spark Innovations' website, leveraging advanced front-end technologies such as React and Redux Toolkit to create a dynamic and user-friendly interface.</li>
        <li>Demonstrated expertise in API handling by seamlessly integrating external APIs, contributing to a more interactive and feature-rich user experience.</li>
        <li>Engaged in both front-end and back-end development, taking a comprehensive approach to deliver end-to-end solutions for complex business requirements.</li>
        <li>Successfully integrated Razorpay payment gateway, enhancing the site's functionality by providing seamless and secure online transactions.</li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Expirence
