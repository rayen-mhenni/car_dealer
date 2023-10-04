import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import Select from "react-select";
import _ from 'lodash'
import { Link } from "react-router-dom";

export default function Listing() {
  const [isload, setisload] = useState(true);
  const [filter, setfilter] = useState(false);

  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [refetech, setrefetech] = useState(false);

  const [mark, setmark] = useState([{}]);
  const [model, setmodel] = useState([{}]);
  const [year, setyear] = useState([{}]);
  const [transmission, settransmission] = useState([
    {
      label: 'Automatique', value: 'automatique'
    },
    {
      label: 'Manuelle', value: 'manuelle'
    }
  ]);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/car")
      .then((response) => {
        if (response.data.car) {
          setData(response.data.car);

          let Make = Object.keys(_.groupBy(response.data.car, 'Make'))
          let Model = Object.keys(_.groupBy(response.data.car, 'Model'))
          let Year = Object.keys(_.groupBy(response.data.car, 'Year'))

          const marksOp = []
          const modelOp = []
          const YearOp = []

          Make.forEach((el) => {
            marksOp.push({
              value: el,
              label: el,
            })
          })

          Model.forEach((el) => {
            modelOp.push({
              value: el,
              label: el,
            })
          })

          Year.forEach((el) => {
            YearOp.push({
              value: el,
              label: el,
            })
          })

          setmark(marksOp)
          setmodel(modelOp)
          setyear(YearOp)

          setisload(false);
        } else {
          setisload(false);
        }
      });
  }, [refetech]);

  const handrefetech = () => {
    setrefetech(!refetech);
  };

  const handelFilter = () => {
    setfilter(true)

    let updatedData = []

    if (mark?.value) {

      updatedData = data?.filter((item) => {
        const startsWith = item.Make

          .toLowerCase()
          .startsWith(mark?.value.toLowerCase());

        const includes = item.Make

          .toLowerCase()
          .includes(mark?.value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilterData([...updatedData]);
    }


  }

  const RestFilter = () => {
    setfilter(false)
  }


  const randerData = () => {

    if (filter) {
      return filterdata
    } else {
      return data
    }
  }

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
        fontSize: 'smal',
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
                      mark
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
                      model
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
                      year
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
                      transmission
                    }
                    styles={colourStyles}
                  />
                  <div className="advanced-button mb" onClick={() => {
                    handelFilter()
                  }}>
                    <a >
                      Search Now
                      <i className="fa fa-search" />
                    </a>
                  </div>

                  <div className="advanced-button" onClick={() => {
                    RestFilter()
                  }}>
                    <a >
                      Rest Filter
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="listing-cars" className="col-md-9">
              <div className="pre-featured">
                <div className="info-text">
                  <h4> {randerData()?.length} results founded</h4>
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

              {/* List cars */}

              {data.length &&
                randerData().map((el) => {
                  return (
                    <div className="featured-item last-featured">
                      <img
                        src={el?.images[0]}
                        className="carPic"
                        alt=""
                      />
                      <div className="right-content">
                        <Link to={`/details/${el._id}`}>
                          <h2>{el.name}</h2>
                        </Link>
                        <span>{el.Price} $</span>
                        <div className="light-line" />
                        <p>
                          <div className="card_specs">
                            <table class="car-specs">
                              <tbody>
                                <tr>
                                  <td class="option-primary">Vin:&nbsp;</td>
                                  <td class="spec">{el?.Vin ?? 'NONE'}</td>
                                </tr>
                                <tr>
                                  <td class="option-primary">Make:&nbsp;</td>
                                  <td class="spec">{el.Make}</td>
                                </tr>
                                <tr>
                                  <td class="option-primary">Model:&nbsp;</td>
                                  <td class="spec">{el.Model}</td>
                                </tr>
                                <tr>
                                  <td class="option-primary">Body type:&nbsp;</td>
                                  <td class="spec">{el.Bodytype}</td>
                                </tr>
                              </tbody>
                            </table>

                            <table class="car-specs-2 hidden-md hidden-sm hidden-xs">
                              <tbody>
                                <tr>
                                  <td class="option-primary">Engine:&nbsp;</td>
                                  <td class="spec">{el.Engine}</td>
                                </tr>
                                <tr>
                                  <td class="option-primary">Cylinders:&nbsp;</td>
                                  <td class="spec">{el.Cylinder}</td>
                                </tr>
                                <tr>
                                  <td class="option-primary">
                                    Exterior color:&nbsp;
                                  </td>
                                  <td class="spec">{el.EXTERIORCOLOR}</td>
                                </tr>
                                <tr>
                                  <td class="option-primary">
                                    Interior color:&nbsp;
                                  </td>
                                  <td class="spec">{el.INTERIORCOLOR}</td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="view-details">
                              <Link to={`/details/${el._id}`}>View Details</Link>
                            </div>
                          </div>
                        </p>

                        <div className="car-info">
                          <ul>
                            <li>
                              <i className="icon-gaspump" />
                              Diesel
                            </li>
                            <li>
                              <i className="icon-road2" />
                              year {el.year}</li>
                            <li>
                              <i className="icon-road2" />
                              {el.Mileage}
                            </li>
                            <li>{el.Transmission}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })



              }


              {/* List cars */}



              <div className="pagination">
                <div className="prev">
                  <a to="#">
                    <i className="fa fa-arrow-left" />
                    Prev
                  </a>
                </div>
                <div className="page-numbers">
                  <ul>
                    <li className="active">
                      <a to="#">1</a>
                    </li>
                    <li>
                      <a to="#">...</a>
                    </li>
                    <li>
                      <a to="#">14</a>
                    </li>
                    <li>
                      <a to="#">15</a>
                    </li>
                    <li>
                      <a to="#">16</a>
                    </li>
                    <li>
                      <a to="#">...</a>
                    </li>
                    <li>
                      <a to="#">47</a>
                    </li>
                  </ul>
                </div>
                <div className="next">
                  <a to="#">
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
