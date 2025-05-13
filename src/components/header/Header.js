import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      
      <div className="header-content">
        
        <h2>Meguiars Sollentuna</h2>
        <h1>BILVERKSTAD STOCKHOLM</h1>
        <p>Vi är en komplett bilvårdsfirma i Johanneshov som erbjuder däckbyte, rekond, biltvätt, däckförvaring och försäljning av nya däck och fälgar.</p>
        <button className="btn-main">Boka tid för däckskifte</button>
      </div>
    </header>
  );
};

export default Header;
