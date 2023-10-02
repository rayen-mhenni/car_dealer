import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
