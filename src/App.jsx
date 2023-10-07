import React from "react";
import "./App.css";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Tours from "./components/Tours";
import Planets from "./components/PLanets";

function App() {
  return (
    <>
      <Home />
      <Testimonials />
      <Tours />
      <Planets/>
    </>
  );
}

export default App;
