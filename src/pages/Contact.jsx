import "../styles/Contact.css";
import InstagramIcon from "../assets/Contact/instagram.png";
import LinkedInIcon from "../assets/Contact/linkedin.png";
import { Link } from "react-router-dom";

// TODO: build contact form with Email.js

function Contact() {
  return (
    <div
      className="contactBox"
      style={{ backgroundColor: "rgb(231, 240, 253)", height: "100vh" }}
    >
      <h1 className="contact-text">Contact Us</h1>
      <div className="contact-paragraph">
        <p>
          If you want to reach out to us for any reason, including requests to
          start a chapter, sponsor, or partner with us, please fill out the
          contact form or send us an email and we will get back to you as soon
          as we can. Make sure to also follow us on social media so you can be
          updated on any CSC news!
        </p>
      </div>
    </div>
  );
}

export default Contact;
