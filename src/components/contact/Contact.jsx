import React,{ useRef, useState } from "react";
import "./Contact.scss";
import emailjs from '@emailjs/browser';
import { YOUR_PUBLIC_KEY } from "../../secret";
import { YOUR_SERVICE_ID } from "../../secret";
import { YOUR_TEMPLATE_ID } from "../../secret";

const Contact = () => {

  const [Success,setSuccess] = useState(false);
  const [Error,setError] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
      publicKey: YOUR_PUBLIC_KEY,
    })
    .then(
      () => {
        setSuccess(true);
      },
      (error) => {
        setError(true);
      },
    );
  };


  return (
    <div className="contact">
      <div className="wrapper">
        <div className="content">
          <h1>Let's Work Together</h1>
          <div className="text">
            <h3>Mail</h3>
            <p>rajpatil2k@gmail.com</p>
          </div>
          <div className="text">
            <h3>Address</h3>
            <p>Vakhan road, Karad</p>
          </div>
          <div className="text">
            <h3>Phone</h3>
            <p>+917517459054</p>
          </div>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name"/>
            <input type="text" placeholder="Email" name="email"/>
            <textarea rows={4} type="text" placeholder="Message" name="message"/>
            <button type="submit" value="Send">Submit</button>
            {Error && <p className="error">Error</p>}
        {Success && <p className="success">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
