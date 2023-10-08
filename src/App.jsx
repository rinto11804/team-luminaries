import React from "react";
import "./App.css";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";

import Services from "./components/Services";
import Contact from "./components/Contact";
import Tours from "./components/Tours";
import Planets from "./components/Planets";
import Pricing from "./components/Pricing";


function App() {
  return (
    <>
      <Home />
      <Tours />
      <Services/>
      <Testimonials />
      <Planets/>
      <Pricing/>
      <Contact/>
    </>
  );
}

export default App;
