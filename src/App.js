
import './App.css';

import Navbar from './Components/Navbar';
import HorizontalMenu from './Components/HorizontalMenu';
import Offer from './Components/Offer';
import HomeSection from './Components/Home';
import Features from './Components/Features';
import WhyChooseGelato from './Components/Why';
import GelatoConnect from './Components/GelatoConnect';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HorizontalMenu/>
      <Offer/>
      <HomeSection/>
      <Features/>
      <WhyChooseGelato/>
     <GelatoConnect/>
     <Footer/>
  
    </div>
  );
}

export default App;
