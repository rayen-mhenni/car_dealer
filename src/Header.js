import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="site-header">
      <div id="main-header" className="main-header header-sticky">
        <div className="inner-header container clearfix">
          <div className="logo">
            <Link to='/'>
              <img src="assets/images/logo.png" alt="" />
            </Link>

          </div>
          <div className="header-right-toggle pull-right hidden-md hidden-lg">
            <a href="javascript:void(0)" className="side-menu-button">
              <i className="fa fa-bars" />
            </a>
          </div>
          <nav className="main-navigation text-left hidden-xs hidden-sm">
            <ul>
              <li>
                <Link to='/'> Home</Link>
              </li>

              <li>
                <Link to='/listing'> Listing</Link>
              </li>


              <li>
                <Link to='/contact'> Contact</Link>
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
