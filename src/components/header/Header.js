import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      
      <div className="header-content">
        
        <h2>Meguiars Sollentuna</h2>
        <h1>BILVERKSTAD STOCKHOLM</h1>
        <p>Vi är en komplett bilvårdsfirma i Johanneshov som erbjuder däckbyte, rekond, biltvätt, däckförvaring och försäljning av nya däck och fälgar.</p>
       <button className="btn-main" onClick={() => window.location.href = 'tel:+46701234567'}>
          Kontakta Oss
        </button>
      </div>
    </header>
  );
};

export default Header;
