import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <div className="sidebar-menu-container" id="sidebar-menu-container">
        <div className="sidebar-menu-push">
          <div className="sidebar-menu-overlay"></div>

          <div className="sidebar-menu-inner">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>

        <nav classname="sidebar-menu slide-from-left">
          <div classname="nano">
            <div classname="content">
              <nav classname="responsive-menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li classname="menu-item-has-children">
                    <a href="#">Listing</a>
                    <ul classname="sub-menu">
                      <li>
                        <a href="listing-right.html">Sidebar Right</a>
                      </li>
                      <li>
                        <a href="listing-left.html">Sidebar Left</a>
                      </li>
                      <li>
                        <a href="listing-grid.html">Grids System</a>
                      </li>
                      <li>
                        <a href="single-list.html">Car Details</a>
                      </li>
                    </ul>
                  </li>
                  <li classname="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul classname="sub-menu">
                      <li>
                        <a href="blog-right.html">Classic</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Grids System</a>
                      </li>
                      <li>
                        <a href="grid-right.html">Grids Sidebar</a>
                      </li>
                      <li>
                        <a href="single-blog.html">Single Post</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
