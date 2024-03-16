import React from "react";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoScroller from "./components/LogoScroller";
import Collaboration from "./components/Collaboration";
import Roadmap from "./components/Roadmap";

import Pricing from "./components/Pricing";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CustomCursor />
      <LogoScroller />
      <Collaboration />
      <Roadmap />
      <Benefits />
      <Pricing />
   
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default App;
