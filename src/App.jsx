import { useEffect, useState } from "react";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}
