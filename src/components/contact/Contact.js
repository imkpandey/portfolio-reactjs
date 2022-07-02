import React from "react";
import "./contact.css";
import {MdMailOutline} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>sanazafar1818@gmail.com</h5>
            <a href="mailto:sanazafar1818@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>Sana Zafar</h5>
            <a href="https://instagram.com/sanazafar83__/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
            <input type='text' name="name" placeholder="Your Full Name" required />
            <input type='email' name="email" placeholder="Your Email" required />
            <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
