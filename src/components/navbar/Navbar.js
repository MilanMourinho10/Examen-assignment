import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/meguiarslogo.png" alt="Meguiars Bilvård" />
       
      </div>
     
     
      <ul className="nav-links">
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/priser-tjanster">Priser & Tjänster</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
      <div className="nav-right">
        <a href="tel:0812057404">08-120 57 04</a>
        <a href="https://www.google.com/maps?q=Bäckvägen+17,+192+54+Sollentuna" target="_blank">
         Meguiars Sollentuna <br/> Bäckvägen 17</a>
         
      </div>
    </nav>
  );
};

export default Navbar;
