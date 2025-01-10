import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Product from "./components/Product/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from './Components/Navigationbar/Navigation';
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
 <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
  <Navigation handleOrderPopup={handleOrderPopup} />
  {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
  <Banner />
  <Product />
  <Banner />
  <Product />
  <Product />
  <Footer />
 </div>
  )
}

export default App
