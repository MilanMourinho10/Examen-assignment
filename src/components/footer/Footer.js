import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 
import {  FaTiktok } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-info">
          <h2>Meguiars Sollentuna</h2>
          <p>Bilvårdsgatan 12, 191 62 Sollentuna</p>
          <p>Telefon: <a href="tel:0854902549">08-549 02 549</a></p>
          <p>E-post: <a href="mailto:kontakt@meguiarssollentuna"></a>meguiarssollentuna@outlook.com</p>
        </div>

        <div className="footer-links">
          <h3>Snabblänkar</h3>
          <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/priser-tjanster">Priser & Tjänster</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        
        <div className="footer-social">
          <h3>Följ oss</h3>
          <div className="social-icons">
            
            <a href="https://tiktok.com/@meguiarssollentuna" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Meguiars Sollentuna. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;
