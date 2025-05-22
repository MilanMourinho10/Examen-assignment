import ContactForm from '../components/contactform/ContactForm';
import Header from '../components/header/Header';
import Services from '../components/service/AboutSection';
import Info from '../pages/Info';
const Home = () => {
  return (
    <>
      <Header />
      <Services></Services>
      <Info></Info>
      <ContactForm/>
    </>
  );
};

export default Home;
