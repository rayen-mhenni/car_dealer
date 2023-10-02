import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <header className="site-header">
        <div id="main-header" className="main-header header-sticky">
          <div className="inner-header container clearfix">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className="header-right-toggle pull-right hidden-md hidden-lg">
              <a
                href="javascript:void(0)"
                className="side-menu-button"
                onClick={() => {
                  setvisible(!visible);
                }}
              >
                <i className="fa fa-bars" />
              </a>
            </div>

            {visible && (
              <nav class="responsive-menu text-left hidden-md hidden-lg">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">Inventory</a>
                  </li>
                  <li>
                    <a href="services.html">Financing</a>
                  </li>
                  <li>
                    <a href="contact.html">Conatct us</a>
                  </li>
                </ul>
              </nav>
            )}

            <nav className="main-navigation text-left hidden-xs hidden-sm">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">Inventory</a>
                </li>
                <li>
                  <a href="services.html">Financing</a>
                </li>
                <li >
                  <a href="contact.html">Conatct us</a>
                </li>
                <li >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
