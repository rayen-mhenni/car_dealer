import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Details() {
  return (
    <>
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
                <h2>Audi a6 tsi s-line</h2>
                <span>$30.000</span>
              </div>
              <Carousel>
                <div>
                  <img src="https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs6-performance-city-rear-1669663117.jpg?crop=0.488xw:0.651xh;0.139xw,0.236xh&resize=1200:*" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src="https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/news/40000/900/50/audi_rs6-performance-31.jpg" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src="https://i.gaw.to/content/photos/43/51/435124-l-audi-rs-6-avant-2021-a-un-prix-qui-reflete-bien-sa-folie.jpeg?1024x640" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
              </Carousel>
              <div className="tab">
                <div className="tabs">
                  <div className="tab-content">
                    <div id="tab2" className="tab active">
                      <h6>Description</h6>
                      <p>
                        Selvage drinking vinegar roof party bitters beard wolf
                        craft beer Blue Bottle, literally you probably haven't
                        heard of them. Deep v jean shorts Williamsburg synth
                        pork belly actually. Organic PBRB viral four loko
                        Bushwick pork belly. Selvage fashion axe sartorial
                        cliche before they sold out, mustache vinyl DIY
                        gastropub fingerstache mlkshk. High Life lo-fi chillwave
                        meggings.
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
                      <span>Make:</span>Audi
                    </li>
                    <li>
                      <span>Model :</span>rs6
                    </li>
                    <li>
                      <span>Year :</span>2015-6-17
                    </li>
                    <li>
                      <span>Mileage:</span>17000 mile
                    </li>
                    <li>
                      <span>Engine:</span>1.8L
                    </li>
                    <li>
                      <span>Cylinder:</span>4
                    </li>
                    <li>
                      <span>Transmission:</span> Automatic
                    </li>
                    <li>
                      <span>Body type:</span>Sedan
                    </li>
                    <li>
                      <span>INTERIOR COLOR:</span>black
                    </li>
                    <li>
                      <span>EXTERIOR COLOR:</span>black
                    </li>
                    <li>
                      <span>Price:</span>$30,000
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
                        <li>
                          <i className="fa fa-check" />
                          ABS
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Xenon Headlights
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Immobilizer
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="subhead-side-bar">
                  <h4>Contact the Seller</h4>
                </div>
                <div className="call-info">
                  <i className="fa fa-phone" />
                  <h6>816-819-0221</h6>
                  <p>
                    Car code: <span>55637</span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
