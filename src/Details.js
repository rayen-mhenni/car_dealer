/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Details() {
  const [isload, setisload] = useState(true);
  const [refetech, setrefetech] = useState(false);
  const [data, setData] = useState({});
  const [images, setimages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/car/" + id).then((response) => {
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

  const { t } = useTranslation();

  return (
    <div className="inventory">
      <div id="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>{t("Vehicle details")}</h1>
              <div className="line" />
              <span>{t("Driving Innovation, Delivering Satisfaction")}</span>
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
                {images &&
                  images.map((el, i) => {
                    return (
                      <div key={i}>
                        <img className="carousel-car" src={el} />
                      </div>
                    );
                  })}
              </Carousel>

              <div className="tab">
                <div className="tabs">
                  <div className="tab-content">
                    <div id="tab2" className="tab active">
                      <h6>{t("Description")}</h6>
                      <p>{data?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="left-info" className="col-md-4">
              <div className="details">
                <div className="head-side-bar">
                  <h4>{t("Vehicle Details")}</h4>
                </div>
                <div className="list-info">
                  <ul>
                    <li>
                      <span>{t("Make")}:</span> {data?.Make}
                    </li>
                    <li>
                      <span>{t("Model")} :</span>
                      {data?.Model}
                    </li>
                    <li>
                      <span>{t("Year")} :</span>
                      {data?.Year}
                    </li>
                    <li>
                      <span>{t("Mileage")}:</span>
                      {data?.Mileage}
                    </li>
                    <li>
                      <span>{t("Engine")}:</span>
                      {data?.Engine}
                    </li>
                    <li>
                      <span>{t("Cylinder")}:</span>
                      {data?.Cylinder}
                    </li>
                    <li>
                      <span>{t("Transmission")}:</span> {data?.Transmission}
                    </li>
                    <li>
                      <span>{t("Body type")}:</span>
                      {data?.Bodytype}
                    </li>
                    <li>
                      <span>{t("INTERIOR COLOR")}:</span>
                      {data?.INTERIORCOLOR}
                    </li>
                    <li>
                      <span>{t("EXTERIOR COLOR")}:</span>
                      {data?.EXTERIORCOLOR}
                    </li>
                    <li>
                      <span>{t("Price")}:</span>${data?.Price}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="enquiry">
                <div className="head-side-bar">
                  <h4>{t("OPTIONS")}</h4>
                </div>
                <div className="more-info">
                  <div className="row">
                    <div className="third-info">
                      <ul>
                        {data?.options?.map((el) => {
                          return (
                            <li>
                              <i className="fa fa-check" />
                              {el}
                            </li>
                          );
                        })}
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
