import logo from './logo.svg';
import './App.css';
import Navbar from './compo/Navbar';
import Hero1 from './compo/Hero1';
import Hero2 from './Hero2';
import Hero3 from './compo/Hero3';
import Footer from './compo/Footer';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Footer/>
    </div>
  );
}

export default App;
