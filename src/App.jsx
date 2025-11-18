import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar  from './Component/Navbar';
import Swiperslide from './Component/Swiperslide';
import ScrollToTop from './Component/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from './Component/About';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import Team from './Component/Team';
import Blog from './Component/Blog';
import Contact from './Component/Contact';  
import Dropdown  from './Component/Dropdown';
import PrivacyPolicy from './Component/PrivacyPolicy';
import Terms from './Component/Terms&condition';
import Support from './Component/Support';
import FAQ from './Component/FAQ';


function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,      // smooth animation time
    once: true,          // animate only once per element
    easing: "ease-out",  // smooth effect
  });
}, []);


  return (
    <Router>
      <ScrollToTop />
      <Navbar/>

       <Routes>
{/*home page*/}

 <Route path='/' element={
  <>
      <Home/>
      <Swiperslide />

      </>
  } />

  {/*pages*/}

  <Route path='/about' element={<About/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/portfolio' element={<Portfolio/>} />
  <Route path='/team' element={<Team/>} />
  <Route path='/blog' element={<Blog/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/dropdown' element={<Dropdown/>} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/support" element={<Support />} />
  <Route path="/faq" element={<FAQ />} />

     </Routes>
      <Footer/>
      
    
    </Router>
  );
}

export default App;
