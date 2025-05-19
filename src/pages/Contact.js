import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(); // 🔑 Vi använder ref för att peka på formuläret

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",        // ✅ Ditt service-ID
        "",       // ✅ Ditt template-ID
        form.current,             
        ""       // ✅ Din public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Meddelandet har skickats! ✅");
          e.target.reset(); // Rensa formuläret
        },
        (error) => {
          console.log(error.text);
          alert("Något gick fel ❌");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>OM MEGUIARS SOLLENTUNA</h2>
          <p>
            Meguiars Sollentuna AB grundades 2012 och har många års erfarenhet inom
            bilvård och rekond...
          </p>
          <p>
            <strong>Adress:</strong> Bäckvägen 17, Sollentuna
          </p>
          <div className="contact-buttons">
            <a href="tel:0812057404" className="contact-btn">
              📞 08-120 574 04
            </a>
            <a href="mailto:zaid@meguiars.se" className="contact-btn">✉️ zaid@meguiars.se</a>

          </div>
        </div>

     
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
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

export default Contact;
