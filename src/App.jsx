import React from "react";
import "./App.css";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";

import Services from "./components/Services";
import Contact from "./components/Contact";
import Tours from "./components/Tours";
import Planets from "./components/PLanets";


function App() {
  return (
    <>
      <Home />
      <Tours />
      <Services/>
      <Testimonials />
      <Planets/>
      <Contact/>
    </>
  );
}

export default App;
