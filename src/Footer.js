import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="about-us">
                <img src="assets/images/logo-2.png" alt="" />
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
                    contact@auction.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="featured-links">
                <h4>Featured Links</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Term &amp; Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Meet The Team
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Company News
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      New Vehicle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      Promotions
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
            <div className="col-md-3">
              <div className="latest-news">
                <h4>Latest News</h4>
                <div className="latest-item">
                  <img
                    src="http://dummyimage.com/64x64/cccccc/fff.jpg"
                    alt=""
                  />
                  <a href="single-blog.html">
                    <h6>Hella Kogi Whatever</h6>
                  </a>
                  <ul>
                    <li>24 Sep,2015</li>
                    <li>2 comments</li>
                  </ul>
                </div>
                <div className="latest-item">
                  <img
                    src="http://dummyimage.com/64x64/cccccc/fff.jpg"
                    alt=""
                  />
                  <a href="single-blog.html">
                    <h6>Retro Art Party</h6>
                  </a>
                  <ul>
                    <li>21 Sep,2015</li>
                    <li>2 comments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="gallery">
                <h4>Gallery</h4>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>
                Copyrights 2015 <em>Auction</em>. Developed by Robert
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
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
