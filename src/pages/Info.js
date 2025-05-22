import React from 'react'
import "./info.css"
export default function info() {
  return (
   <div className="info-cards">
       
        <div className="card">
          <h2>DÄCK OCH FÄLGAR</h2>
          <p>
            Vi är en komplett däckverkstad i Stockholm som erbjuder professionell service för allt som rör dina däck.
            Hos oss kan du smidigt boka tid för däckskifte, få dina däck balanserade för en säkrare körning och förvara dina däck tryggt mellan säsongerna i vårt däckhotell. Vi erbjuder även försäljning av både nya däck och snygga fälgar – allt för att du ska kunna köra tryggt, bekvämt och med stil året om.
          </p>
          <button className="orange-button">Så våra priser</button>
        </div>

       
        <div className="card dark">
          <h2>MEGUIARS SOLLENTUNA</h2>
          <p>
            Vi erbjuder ett komplett utbud av bilvårdstjänster för dig som vill ge din bil det lilla extra.
            Från noggrann och skonsam handtvätt till helrekonditionering, vaxning och avancerad lackförsegling – vi tar hand om din bil med stor omsorg och expertis. Oavsett om du vill fräscha upp bilen inför försäljning, efter en tuff vinter eller bara hålla den i toppskick året runt, har vi tjänsterna som passar dina behov.


          </p>
          <p>
            Har du frågor eller vill du få en offert? Kontakta oss på{" "}
            <span className="bold">08-549 02 321</span> eller{" "}
            <span className="underline">kontakt@meguiarssollentuna.se</span>
          </p>
          <button className="white-button">Kontakta oss</button>
        </div>

     
        <div className="card">
          <h2>BEHÖVER DU FÖRVARA DÄCK?</h2>
          <p>
            Vi erbjuder trygg och smidig däckförvaring i Stockholm för alla typer av bilar och fälgar.
            När du lämnar in dina däck hos oss ser vi till att de förvaras svalt, torrt och säkert under hela säsongen. Inför nästa däckbyte rengör vi däcken noggrant och kontrollerar deras skick, så att du alltid kör med rena och välmående däck. Du slipper tunga lyft och däck i förrådet – vi tar hand om allt åt dig!


          </p>
          <button className="orange-button">Läs mer</button>
        </div>
      </div>
  )
}
