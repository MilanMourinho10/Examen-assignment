import React, { useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

 

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>OM MEGUIARS SOLLENTUNA</h2>
          <p>
            Meguiars Sollentuna AB grundades 2012...
            Meguiars Sollentuna AB grundades 2012...
          </p>
          <p><strong>Adress:</strong> Camp Nou 6, Sollentuna</p>
          <div className="contact-buttons">
          <a href="tel:085491050" className="contact-btn">📞 08-549 10 50</a>
          <a href="mailto:zaid@meguiars.se" className="contact-btn">✉️ zaid@meguiars.se</a>

          
          </div>
        </div>

        <div className="contact-form">
          <form ref={form}>
                <input type="text" name="from_name" placeholder="Namn*" required />
                <input type="email" name="from_email" placeholder="Email*" required />
                <input type="text" name="subject" placeholder="Ämne*" required />
                <textarea name="message" placeholder="Meddelande*" required></textarea>
                <button type="submit" className="submit-btn">Skicka</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
