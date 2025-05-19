
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import PriceList from './pages/PriceList';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
        <div className="App">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priser-tjanster" element={<PriceList />} />
          <Route path="/kontakt" element={<Contact/>} />
        </Routes>
       <Footer/>
       
        </div>
      </Router>
      
  );
}

export default App;
