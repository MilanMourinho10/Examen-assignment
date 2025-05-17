import React from "react";
import "./PriceList.css"; // Se till att CSS-filen importeras

const PriceList = () => {
  return (
    <div className="price-list-container">
      <div className="price-card">
        <h2>PRISER BILVÅRD</h2>
        <ul>
          <li><span>Utvändig tvätt</span> <span>fr 350 kr</span></li>
          <li><span>Invändig tvätt</span> <span>fr 350 kr</span></li>
          <li><span>Ut- och invändig tvätt</span> <span>600</span></li>
          <li><span>Husbils tvätt</span> <span>fr 1200 kr</span></li>
          <li><span>Motortvätt</span> <span>fr 500 kr</span></li>
          <li><span>Glasbehandling</span> <span>fr 400 kr</span></li>
          <li><span>Fälgbehandling</span> <span>fr 400 kr</span></li>
          <li><span>Snabbvaxning</span> <span>fr 500 kr</span></li>
          <li><span>Klädseltvätt</span> <span>Per säte 400 kr</span></li>
          <li><span>Skinnbehandling</span> <span>fr 2000 kr</span></li>
          <li><span>Textil och skinnimpregnering</span> <span>2000</span></li>
          <li><span>Strålkastar renovering</span> <span>fr 700/st kr</span></li>
          <li><span>Asfaltbortagning</span> <span>fr 500 kr</span></li>
          <li><span>Invändig rekonditionering</span> <span>fr 2600 kr</span></li>
          <li><span>Försäljnings rekond</span> <span>fr 3500 kr</span></li>
          <li><span>Polering och vaxning</span> <span>fr 4000 kr</span></li>
          <li><span>"Lackskydd synthetic sealant 2,0 M27"</span> <span>fr PBil/Suv 4400/5500 kr</span></li>
          <li><span>Lackförsegling deep crystal coating M688</span> <span>fr 7000 kr</span></li>
          <li><span>Hel Rekond</span> <span>fr 4800 kr</span></li>

        </ul>
      </div>

      <div className="price-card">
        <h2>PRISER DÄCKVÅRD</h2>
        <ul>
          <li><span>Däckskifte personbil</span> <span>300 kr</span></li>
          <li><span>Lagning av punktering</span> <span>420 kr</span></li>
        </ul>

        <h2>PRISER DÄCKHOTELL</h2>
        <ul>
          <li><span>Silverförvaring</span> <span>1995 kr</span></li>
          <li><span>Guldförvaring</span> <span>2195 kr</span></li>
        </ul>

        <p className="extra-info">
          Extra kostnad tillkommer om 450:- vid stor bil eller stora hjul.<br />
          Extra kostnad tillkommer för hårt smutsade bilar från 170:-.<br />
          Vi reserverar oss för ev. prisjusteringar.
        </p>
      </div>
    </div>
  );
};

export default PriceList;
