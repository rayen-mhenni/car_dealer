import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <div className="about-us">
                <img src="assets/images/logo_3.png" alt="" />
              </div>

            </div>

            <div className="col-md-4">
              <div className="about-us">
                <p>
                  Maecenas ne mollis orci. Phasell iacu sapie non aliquet ex
                  euismo ac.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" />
                    Raver Croft Drive Knoxville, 37921
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    +55 417-634-7071
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    contact@RO.com
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-md-4">
              <div className="featured-links">
                <h4>Featured Links</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Inventory
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Financing
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Contact
                    </a>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </footer>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p>
                Copyrights 2015 <em>RO</em>. Developed by RO
              </p>
            </div>

          </div>
        </div>
      </div>
      <a href="#" className="go-top">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
};

export default Footer;
