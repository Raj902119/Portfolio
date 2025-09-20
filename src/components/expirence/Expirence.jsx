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
          <h1>Swapsoft Sghitech Pvt Ltd, Pune</h1>
          <hr />
          <h2>Full Stack Developer</h2>
        </div>
      </div>
      {/* <div className='downcon'>
        <p>Spark Innovations is passionate about empowering innovation by providing resources for aspiring creators and engineers. They offer a range of services, including wholesale electronics components, tailor-made projects for engineering students, and engaging workshops.</p>
      </div> */}
    </div>
    </div>
    <div className='rcol'>
      <ul>
        <li>Built responsive and scalable CRM platforms for schools and colleges using React.js, Next.js, and TailwindCSS, reducing bounce rates by 25%.</li>
        <li>Developed secure banking applications with JWT/Session-based authentication, ensuring compliance and robust access control.</li>
        <li>Delivered a government PWD project, implementing reusable UI components with TailwindCSS and Carbon Design System for consistent design.</li>
        <li>Optimized performance with Next.js SSR/SSG, achieving 600% faster load times and 40% growth in organic traffic.</li>
        <li>Integrated REST APIs with Axios, securing communication with interceptors and token-based flows.</li>
        <li>Collaborated with designers in Figma to deliver pixel-perfect UI.</li>
        <li>Implemented CI/CD pipelines with GitHub Actions, automating build, testing, and deployments.</li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Expirence
