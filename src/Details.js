/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Details() {

  const [isload, setisload] = useState(true);
  const [refetech, setrefetech] = useState(false);
  const [data, setData] = useState({});
  const [images, setimages] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/car/" + id)
      .then((response) => {
        if (response.data) {
          setData(response.data.car);
          setimages(response.data.car?.images ?? []);
          setisload(false);
        } else {
          setisload(false);
        }
      });
  }, [refetech]);

  const handrefetech = () => {
    setrefetech(!refetech);
  };

  return (
    <div className="inventory">
      <div id="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Vehicle details</h1>
              <div className="line" />
              <span>Driving Innovation, Delivering Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <section className="car-details">
        <div className="container">
          <div className="row">
            <div id="single-car" className="col-md-8">
              <div className="up-content clearfix">
                <h2>{data.name}</h2>
                <span>${data.Price}</span>
              </div>



              <Carousel>
                {
                  images && images.map((el, i) => {
                    return (
                      <div key={i}>
                        <img className="carousel-car" src={el} />
                      </div>
                    )
                  })
                }

              </Carousel>


              <div className="tab">
                <div className="tabs">
                  <div className="tab-content">
                    <div id="tab2" className="tab active">
                      <h6>Description</h6>
                      <p>
                        {data?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="left-info" className="col-md-4">
              <div className="details">
                <div className="head-side-bar">
                  <h4>Vehicle Details</h4>
                </div>
                <div className="list-info">
                  <ul>
                    <li>
                      <span>Make:</span>  {data?.Make}
                    </li>
                    <li>
                      <span>Model :</span>{data?.Model}
                    </li>
                    <li>
                      <span>Year :</span>{data?.Year}
                    </li>
                    <li>
                      <span>Mileage:</span>{data?.Mileage}
                    </li>
                    <li>
                      <span>Engine:</span>{data?.Engine}
                    </li>
                    <li>
                      <span>Cylinder:</span>{data?.Cylinder}
                    </li>
                    <li>
                      <span>Transmission:</span> {data?.Transmission}
                    </li>
                    <li>
                      <span>Body type:</span>{data?.Bodytype}
                    </li>
                    <li>
                      <span>INTERIOR COLOR:</span>{data?.INTERIORCOLOR}
                    </li>
                    <li>
                      <span>EXTERIOR COLOR:</span>{data?.EXTERIORCOLOR}
                    </li>
                    <li>
                      <span>Price:</span>${data?.Price}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="enquiry">
                <div className="head-side-bar">
                  <h4>OPTIONS</h4>
                </div>
                <div className="more-info">
                  <div className="row">
                    <div className="third-info">
                      <ul>
                        {
                          data?.options?.map((el) => {
                            return (
                              <li>
                                <i className="fa fa-check" />
                                {el}
                              </li>
                            )
                          })
                        }


                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
