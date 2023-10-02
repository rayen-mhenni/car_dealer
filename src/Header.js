import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="site-header">
      <div id="main-header" className="main-header header-sticky">
        <div className="inner-header container clearfix">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="" />
            </a>
          </div>
          <div className="header-right-toggle pull-right hidden-md hidden-lg">
            <a href="javascript:void(0)" className="side-menu-button">
              <i className="fa fa-bars" />
            </a>
          </div>
          <nav className="main-navigation text-left hidden-xs hidden-sm">
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
              <li>
                <a href="#" className="has-submenu">
                  Listing
                </a>
                <ul className="sub-menu">
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
              <li>
                <a href="#" className="has-submenu">
                  Blog
                </a>
                <ul className="sub-menu">
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
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <p>
                  <a
                    href="#"
                    id="example-show"
                    className="showLink"
                    onclick="showHide('example');return false;"
                  >
                    <i className="fa fa-search" />
                  </a>
                </p>
                <div id="example" className="more">
                  <form method="get" id="blog-search" className="blog-search">
                    <input
                      type="text"
                      className="blog-search-field"
                      name="s"
                      placeholder="Type to search"
                      defaultValue=""
                    />
                  </form>
                  <p>
                    <a
                      href="#"
                      id="example-hide"
                      className="hideLink"
                      onclick="showHide('example');return false;"
                    >
                      <i
                        className="
                        fa fa-close"
                      />
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
