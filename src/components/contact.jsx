import {React , useState,useEffect} from "react";
import "./contact.css";
import Skcard from "./skcards";

function Contact() {
  const [loading,setLoading] =useState(true);
      useEffect(() => {
        setTimeout (() => {
          setLoading(false);
        },500);
      }, []);
  return (
    <>
    <br/>
     {loading ? <Skcard/> :
  
    <div className="contact-page">
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p><strong>Address:</strong> Basavanapura Gate Bangalore</p>
          <p><strong>Email:</strong> wisdomway@gmail.com</p>
          <p><strong>Phone:</strong> 91 8073471712</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Send a Message Section */}
        <div className="message-form">
          <h2>SEND A MESSAGE</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Mobile Number" required />
            </div>
            <textarea placeholder="Write your message here..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
}
    </>
  );
}

export default Contact;
