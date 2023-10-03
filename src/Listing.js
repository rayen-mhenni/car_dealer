import React from "react";
import Footer from "./Footer";
import Select from "react-select";

export default function Listing() {

  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'rgba(135, 129, 129, 0.264)',
      border: 'none',
      color: '#000',
      outline: "none",
      padding: '3px'
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: 'rgba(135, 129, 129, 0.264)',
        color: '#000',
        fontSize: 'larger',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? '#e4ca73'
              : 'rgba(135, 129, 129, 0.264)'
            : undefined
        },
      };
    },
    placeholder: (styles) => ({
      ...styles,
      color: '#fff',
      fontSize: 'smal'
    }),
    singleValue: (styles, { data }) => ({
      ...styles,
      color: '#fff',
      fontSize: 'smal'
    }),
    input: (styles) => ({ ...styles, color: '#fff' }),


  };

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
                  <Select
                    className="basic-single select-inv"
                    isClearable={true}
                    classNamePrefix="select"
                    placeholder='Select Mark'
                    name="color"
                    maxMenuHeight={"200px"}
                    options={
                      [
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: '5' },
                        { value: '6', label: '6' },
                        { value: '7', label: '7' },

                      ]
                    }
                    styles={colourStyles}
                  />

                  <Select
                    className="basic-single select-inv"
                    isClearable={true}
                    classNamePrefix="select"
                    placeholder='Select Model'
                    name="color"
                    maxMenuHeight={"200px"}
                    options={
                      [
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: '5' },
                        { value: '6', label: '6' },
                        { value: '7', label: '7' },

                      ]
                    }
                    styles={colourStyles}
                  />
                  <Select
                    className="basic-single select-inv"
                    isClearable={true}
                    classNamePrefix="select"
                    placeholder='Select Year'
                    name="color"
                    maxMenuHeight={"200px"}
                    options={
                      [
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: '5' },
                        { value: '6', label: '6' },
                        { value: '7', label: '7' },

                      ]
                    }
                    styles={colourStyles}
                  />
                  <Select
                    className="basic-single select-inv"
                    isClearable={true}
                    classNamePrefix="select"
                    placeholder='Select Transmissions'
                    name="color"
                    maxMenuHeight={"200px"}
                    options={
                      [
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: '5' },
                        { value: '6', label: '6' },
                        { value: '7', label: '7' },

                      ]
                    }
                    styles={colourStyles}
                  />
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
                    <Select
                      className="basic-single"
                      isClearable={true}
                      classNamePrefix="select"
                      placeholder='Sord Cars By'
                      name="color"
                      maxMenuHeight={"200px"}
                      options={
                        [
                          { value: '1', label: '1' },
                          { value: '2', label: '2' },
                          { value: '3', label: '3' },
                          { value: '4', label: '4' },
                          { value: '5', label: '5' },
                          { value: '6', label: '6' },
                          { value: '7', label: '7' },

                        ]
                      }
                      styles={colourStyles}
                    />
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
