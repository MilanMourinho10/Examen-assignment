import React from "react";
import "./Services.css";

const services = [
  { image: "/images/bilrekond.jpg", title: "Bilrekond" },
  { image: "/images/carwash.jpg", title: "Biltvätt" },
  { image: "/images/tirestorage.jpg", title: "Däckverkstad" },
  { image: "/images/tirechange.jpg", title: "Däckbyte" },
];

const Services = () => {
  return (
    <section className="services-container">
      
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>  
      <div className="info-cards">
       
        <div className="card">
          <h2>DÄCK OCH FÄLGAR</h2>
          <p>
            Vi är en komplett däckverkstad i Stockholm som erbjuder däckskifte,
            förvaring och balansering. Dessutom säljer vi både däck och fälgar.
          </p>
          <button className="orange-button">Så våra priser</button>
        </div>

       
        <div className="card dark">
          <h2>MEGUIARS SOLLENTUNA</h2>
          <p>
            Vi utför allt tänkbart inom bilvård – från skonsam handtvätt och
            omfattande <span className="highlight">bilrekond</span> till vaxning
            och lackförsegling av din bil.
          </p>
          <p>
            Har du frågor eller vill du få en offert? Kontakta oss på{" "}
            <span className="bold">08-549 02 549</span> eller{" "}
            <span className="underline">kontakt@soderortsbilvard.se</span>
          </p>
          <button className="white-button">Kontakta oss</button>
        </div>

     
        <div className="card">
          <h2>BEHÖVER DU FÖRVARA DÄCK?</h2>
          <p>
            Vår däckförvaring i Stockholm tar emot alla bilmodeller. Vi ser till
            att tvätta och rengöra däcken inför kommande däckbyte.
          </p>
          <button className="orange-button">Läs mer</button>
        </div>
      </div>

      {/* Sektionen med tjänsterna */}
    </section>
  );
};

export default Services;
