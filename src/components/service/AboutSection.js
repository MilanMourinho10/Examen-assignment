import React from "react";
import "./Services.css";

const services = [
  { image: "/images/bilrekond.jpg", title: "Bilrekond" },
  { image: "/images/carwash.jpg", title: "Biltvätt" },
  
  { image: "/images/tirestorage.jpg", title: "Däckverkstad" },
  { image: "/images/tirechange.jpg", title: "Däckskifte/Däckbyte" },
];

const Services = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.image} alt={service.title} />
          <p>{service.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
