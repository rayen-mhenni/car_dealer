import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Listing from "./Listing";
import SingleList from "./SingleList";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/single/:id" element={<SingleList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
