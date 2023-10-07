import React from "react";
import "./App.css";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Home />
      <Testimonials />
      <Services/>
      <Contact/>
    </>
  );
}

export default App;
