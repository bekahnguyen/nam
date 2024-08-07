import { useEffect, useState } from "react";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        HI
      </div>
    </>
  );
}
