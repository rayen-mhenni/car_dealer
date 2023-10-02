import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
