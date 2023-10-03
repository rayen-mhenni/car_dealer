import React from "react";
import Footer from "./Footer";

export default function Listing() {
  return (
    <div className="inventory">
      <div id="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Inventory</h1>
              <div className="line" />
              <span>
                We’ve got the cars, the deals, and the service you deserve!,
                find the best deals and get your car from ower best offers
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="listing-page">
        <div className="container">
          <div className="row">
            <div id="sidebar" className="col-md-3">
              <div className="sidebar-content">
                <div className="head-side-bar">
                  <h4>Search our inventory</h4>
                </div>
                <div className="search-form">
                  <div className="select">
                    <select name="mark" id="make">
                      <option value={-1}>Select Make</option>
                      <option>honda</option>
                      <option>dodge</option>
                      <option>ford</option>
                      <option>chevrolet</option>
                    </select>
                  </div>
                  <div className="select">
                    <select name="mark" id="model">
                      <option value={-1}>Select Model</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="select">
                    <select name="mark" id="model">
                      <option value={-1}>Select Year</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  <div className="select">
                    <select name="mark" id="model">
                      <option value={-1}>Select Transmission</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                  {/* <div className="slider-range">
                    <p>
                      <input
                        type="text"
                        className="range"
                        id="amount"
                        readOnly
                      />
                    </p>
                    <div id="slider-range" />
                  </div> */}

                  <div className="advanced-button">
                    <a href="listing-right.html">
                      Search Now
                      <i className="fa fa-search" />
                    </a>
                  </div>
                  <div className="search_info">
                    <br />
                    <strong>Year</strong>
                    <br />
                    <strong>Make</strong>
                  </div>
                </div>
              </div>
            </div>

            <div id="listing-cars" className="col-md-9">
              <div className="pre-featured">
                <div className="info-text">
                  <h4>50 results founded</h4>
                </div>
                <div className="right-content">
                  <div className="input-select">
                    <select
                      name="mark"
                      onClick={(e) => {
                        console.log("rrrrrrrrrr", e.target.value);
                      }}
                      id="mark"
                    >
                      <option value={-1}>Sorted by</option>
                      <option>Price</option>
                      <option>Miles</option>
                      <option>Year</option>
                      <option>Near</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="featured-item last-featured">
                <img
                  src="https://e0.pxfuel.com/wallpapers/192/395/desktop-wallpaper-car-high-resolution-high-quality-car.jpg"
                  className="carPic"
                  alt=""
                />
                <div className="right-content">
                  <a href="/details">
                    <h2>audi a6 tfsi s-line</h2>
                  </a>
                  <span>48,000 $</span>
                  <div className="light-line" />
                  <p>
                    <div className="card_specs">
                      <table class="car-specs">
                        <tbody>
                          <tr>
                            <td class="option-primary">Vin:&nbsp;</td>
                            <td class="spec">2T1BR32EX4C838931</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Make:&nbsp;</td>
                            <td class="spec">Toyota</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Model:&nbsp;</td>
                            <td class="spec">Corolla</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Body type:&nbsp;</td>
                            <td class="spec">Sedan</td>
                          </tr>
                        </tbody>
                      </table>

                      <table class="car-specs-2 hidden-md hidden-sm hidden-xs">
                        <tbody>
                          <tr>
                            <td class="option-primary">Engine:&nbsp;</td>
                            <td class="spec">1.8 L</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Cylinders:&nbsp;</td>
                            <td class="spec">4</td>
                          </tr>
                          <tr>
                            <td class="option-primary">
                              Exterior color:&nbsp;
                            </td>
                            <td class="spec">Black</td>
                          </tr>
                          <tr>
                            <td class="option-primary">
                              Interior color:&nbsp;
                            </td>
                            <td class="spec">Grey</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="view-details">
                        <a href="/details">View Details</a>
                      </div>
                    </div>
                  </p>

                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>year</li>
                      <li>
                        <i className="icon-road2" />
                        12,000 Mile
                      </li>
                      <li>Automatique</li>
                    </ul>
                  </div>
                </div>
              </div>

              
              <div className="featured-item last-featured">
                <img
                  src="https://e0.pxfuel.com/wallpapers/192/395/desktop-wallpaper-car-high-resolution-high-quality-car.jpg"
                  className="carPic"
                  alt=""
                />
                <div className="right-content">
                  <a href="/details">
                    <h2>audi a6 tfsi s-line</h2>
                  </a>
                  <span>48,000 $</span>
                  <div className="light-line" />
                  <p>
                    <div className="card_specs">
                      <table class="car-specs">
                        <tbody>
                          <tr>
                            <td class="option-primary">Vin:&nbsp;</td>
                            <td class="spec">2T1BR32EX4C838931</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Make:&nbsp;</td>
                            <td class="spec">Toyota</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Model:&nbsp;</td>
                            <td class="spec">Corolla</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Body type:&nbsp;</td>
                            <td class="spec">Sedan</td>
                          </tr>
                        </tbody>
                      </table>

                      <table class="car-specs-2 hidden-md hidden-sm hidden-xs">
                        <tbody>
                          <tr>
                            <td class="option-primary">Engine:&nbsp;</td>
                            <td class="spec">1.8 L</td>
                          </tr>
                          <tr>
                            <td class="option-primary">Cylinders:&nbsp;</td>
                            <td class="spec">4</td>
                          </tr>
                          <tr>
                            <td class="option-primary">
                              Exterior color:&nbsp;
                            </td>
                            <td class="spec">Black</td>
                          </tr>
                          <tr>
                            <td class="option-primary">
                              Interior color:&nbsp;
                            </td>
                            <td class="spec">Grey</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="view-details">
                        <a href="/details">View Details</a>
                      </div>
                    </div>
                  </p>

                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>year</li>
                      <li>
                        <i className="icon-road2" />
                        12,000 Mile
                      </li>
                      <li>Automatique</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <div className="prev">
                  <a href="#">
                    <i className="fa fa-arrow-left" />
                    Prev
                  </a>
                </div>
                <div className="page-numbers">
                  <ul>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">14</a>
                    </li>
                    <li>
                      <a href="#">15</a>
                    </li>
                    <li>
                      <a href="#">16</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">47</a>
                    </li>
                  </ul>
                </div>
                <div className="next">
                  <a href="#">
                    Next
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
