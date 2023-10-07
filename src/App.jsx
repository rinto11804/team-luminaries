import React from "react";
import "./App.css";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Tours from "./components/Tours";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Testimonials />
      <Tours />
    </>
  );
}

export default App;
