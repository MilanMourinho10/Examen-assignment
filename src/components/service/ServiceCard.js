import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, text, bgColor, buttonText }) => {
  return (
    <div className="service-card" style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default ServiceCard;
