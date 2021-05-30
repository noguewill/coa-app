/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import About from "./components/About";
import Testimonial from "./components/Testimonal";
import Eshop from "./components/Eshop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const waitForHero = setTimeout(() => {
      setActive(true);
    }, 5000);

    return () => {
      clearTimeout(waitForHero);
    };
  }, []);
  return (
    <>
      {/* <NavBar active={active} /> */}
      {/*    <Nav /> */}
      <div className="w-full flex flex-col items-center justify-between">
        <Hero active={active} />
        <About />
      </div>
    </>
  );
};
export default App;

/*       
       
        <Testimonial />
        <Eshop />
        <Footer /> */
