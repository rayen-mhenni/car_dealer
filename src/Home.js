import React from "react";

export const Home = () => {
    return (
        <div className="cover">

            <section className="hero-fullscreen coming-soon-2">
                <div className="hero-static-fullscreen">
                    <div className="hero-image cover-img">
                        <div className="overlay">
                            <div className="hero-container container">
                                <div className="hero-content wow alert animated" style={{ visibility: 'visible' }}>
                                    <div className="wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                        <img src="assets\img\logo-homepage.png" />
                                    </div>
                                    <br /><br />
                                    {/* Begin page content */}
                                    <section className="home-block-1">
                                        <div className="container">
                                            <div>
                                                <div id="filter-horizontal" className="row">
                                                    <form action="inventory.php" method="GET" className="clearfix select-form">
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                            <select id="make" name="make_id" className="custom-select margin-bottom-0" tabIndex={1}>
                                                                <option value>Sélectionnez marque</option>
                                                                <option value={0}>Tout</option>
                                                                <option value={1}>Acura</option><option value={6}>Audi</option><option value={8}>BMW</option><option value={13}>Chevrolet</option><option value={14}>Chrysler</option><option value={15}>Dodge</option><option value={16}>Ford</option><option value={35}>GMC</option><option value={17}>Honda</option><option value={18}>Hyundai</option><option value={19}>Infiniti</option><option value={20}>Jeep</option><option value={21}>Kia</option><option value={41}>Lexus</option><option value={22}>Mazda</option><option value={23}>Mercedes-Benz</option><option value={37}>Mini</option><option value={24}>Mitsubishi</option><option value={25}>Nissan</option><option value={28}>Subaru</option><option value={29}>Suzuki</option><option value={30}>Toyota</option><option value={31}>Volkswagen</option><option value={32}>Volvo</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                            <div id="model-wrapper">
                                                                <select id="model" name="model_id" className="custom-select margin-bottom-0" tabIndex={1}>
                                                                    <option value>Sélectionnez modèle</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                            <div id="year-wrapper">
                                                                <select name="year" className="custom-select margin-bottom-0" tabIndex={1}>
                                                                    <option value>Sélectionnez l'année</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                            <button id="search-filter" type="submit" value="submit" className="pull-left btn-inventory margin-bottom-none md-button">Recherche</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <p>
                                        <br /><br />
                                    </p><div className="hidden" data-wow-delay="0.3s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                                    <p />
                                    <div className="cars-on-home margin-top-15 hidden-xs">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* 
      <div className="slider">
        <div className="fullwidthbanner-container">
          <div className="fullwidthbanner">
            <ul>
              <li
                className="first-slide"
                data-transition="fade"
                data-slotamount={10}
                data-masterspeed={300}
              >
                <img
                  src="http://dummyimage.com/1400x750/cccccc/fff.jpg"
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                <div
                  className="tp-caption first-line lft tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={160}
                  data-speed={1000}
                  data-start={200}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Creative Portfolio
                </div>
                <div
                  className="tp-caption second-line lfb tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={210}
                  data-speed={1000}
                  data-start={800}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Best site for vehicle
                </div>
                <div
                  className="tp-caption third-line lfb tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={280}
                  data-speed={1000}
                  data-start={800}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  We belong to and <em>help members</em> of several car clubs
                </div>
                <div
                  className="tp-caption slider-thumb sfb tp-resizeme start container hidden-xs hidden-sm"
                  data-x="center"
                  data-hoffset={0}
                  data-y={460}
                  data-speed={1000}
                  data-start={2200}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$55,000</span>
                          <div className="span-bg" />
                          <h2>2015 bmw 328i touring</h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$30,000</span>
                          <div className="span-bg" />
                          <h2>vencer sarthe 2015 </h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$45,000</span>
                          <div className="span-bg" />
                          <h2>CLS63 AMG S-Model 4MATIc</h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li
                className="first-slide"
                data-transition="fade"
                data-slotamount={10}
                data-masterspeed={300}
              >
                <img
                  src="http://dummyimage.com/1400x750/cccccc/fff.jpg"
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                <div
                  className="tp-caption first-line lft tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={160}
                  data-speed={1000}
                  data-start={200}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Welcome to Auction
                </div>
                <div
                  className="tp-caption second-line lfb tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={210}
                  data-speed={1000}
                  data-start={800}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Find your dream car
                </div>
                <div
                  className="tp-caption third-line lfb tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={280}
                  data-speed={1000}
                  data-start={800}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Visit <em>car listing</em> page, to see all cars
                </div>
                <div
                  className="tp-caption slider-thumb sfb tp-resizeme start container hidden-xs hidden-sm"
                  data-x="center"
                  data-hoffset={0}
                  data-y={460}
                  data-speed={1000}
                  data-start={2200}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$55,000</span>
                          <div className="span-bg" />
                          <h2>2015 bmw 328i touring</h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$30,000</span>
                          <div className="span-bg" />
                          <h2>vencer sarthe 2015 </h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$45,000</span>
                          <div className="span-bg" />
                          <h2>CLS63 AMG S-Model 4MATIc</h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li
                className="first-slide"
                data-transition="fade"
                data-slotamount={10}
                data-masterspeed={300}
              >
                <img
                  src="http://dummyimage.com/1400x750/cccccc/fff.jpg"
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                <div
                  className="tp-caption first-line lft tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={160}
                  data-speed={1000}
                  data-start={200}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  More opportunities
                </div>
                <div
                  className="tp-caption second-line lfb tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={210}
                  data-speed={1000}
                  data-start={800}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Put your car on sale
                </div>
                <div
                  className="tp-caption third-line lfb tp-resizeme start"
                  data-x="center"
                  data-hoffset={0}
                  data-y={280}
                  data-speed={1000}
                  data-start={800}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  Find used cars on <em>recent cars</em> page
                </div>
                <div
                  className="tp-caption slider-thumb sfb tp-resizeme start container hidden-xs hidden-sm"
                  data-x="center"
                  data-hoffset={0}
                  data-y={460}
                  data-speed={1000}
                  data-start={2200}
                  data-easing="Power4.easeOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay={0}
                  data-endelementdelay={0}
                >
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$55,000</span>
                          <div className="span-bg" />
                          <h2>2015 bmw 328i touring</h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$30,000</span>
                          <div className="span-bg" />
                          <h2>vencer sarthe 2015 </h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="single-list.html">
                      <div className="thumb-item">
                        <div className="top-content">
                          <span>$45,000</span>
                          <div className="span-bg" />
                          <h2>CLS63 AMG S-Model 4MATIc</h2>
                        </div>
                        <div className="down-content">
                          <p>
                            Sed te idque graecis. Vel ne libris erer
                            <br /> dolores, mel graece mel viveo
                          </p>
                          <img
                            src="http://dummyimage.com/60x60/cccccc/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="cta-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Owners of salvage-title <em>vehicles</em> will encounter some
                unique issues.
              </p>
              <div className="advanced-button">
                <a href="listing-right.html">
                  See all cars
                  <i className="fa fa-car" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="left-content">
                <div className="heading-section">
                  <h2>Why choose us?</h2>
                  <span>
                    Vivamus gravida magna massa in cursus mi vehicula at. Nunc
                    sem quam suscipit
                  </span>
                  <div className="line-dec" />
                </div>
                <div className="services">
                  <div className="col-md-6">
                    <div className="service-item">
                      <i className="fa fa-bar-chart-o" />
                      <div className="tittle">
                        <h2>Results of Drivers</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item">
                      <i className="fa fa-gears" />
                      <div className="tittle">
                        <h2>upgrades performance</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item second-row">
                      <i className="fa fa-pencil" />
                      <div className="tittle">
                        <h2>product sellers</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item second-row last-service">
                      <i className="fa fa-wrench" />
                      <div className="tittle">
                        <h2>Fast Service</h2>
                      </div>
                      <p>
                        Integer nec posuere metus, at feugiat. Sed sodales
                        venenat malesuada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-img">
                <img
                  src="http://dummyimage.com/370x340/cccccc/fff.jpg"
                  alt=""
                />
                <div className="img-bg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-listing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-2 text-center">
                <h2>Featured Cars Listing</h2>
                <span>
                  Vivamus gravida magna massa in cursus mi vehicula at. Nunc sem
                  quam suscipit
                </span>
                <div className="dec">
                  <i className="fa fa-car" />
                </div>
                <div className="line-dec" />
              </div>
            </div>
          </div>
          <div className="row">
            <div id="featured-cars">
              <div className="featured-item col-md-15 col-sm-6">
                <img
                  src="http://dummyimage.com/310x210/cccccc/fff.jpg"
                  alt=""
                />
                <div className="down-content">
                  <a href="single-list.html">
                    <h2>Mercedes Amg 6.3</h2>
                  </a>
                  <span>52,000</span>
                  <div className="light-line" />
                  <p>
                    Donec eu nullas sapien pretium volutpat vel quis turpis.
                    Donec vel risus lacinia euismod urna vel fringilla justo.
                  </p>
                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>
                        <i className="icon-car" />
                        Sport
                      </li>
                      <li>
                        <i className="icon-road2" />
                        12,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="featured-item col-md-15 col-sm-6">
                <img
                  src="http://dummyimage.com/310x210/cccccc/fff.jpg"
                  alt=""
                />
                <div className="down-content">
                  <a href="single-list.html">
                    <h2>vw golf VII GTI</h2>
                  </a>
                  <span>30,000</span>
                  <div className="light-line" />
                  <p>
                    Donec eu nullas sapien pretium volutpat vel quis turpis.
                    Donec vel risus lacinia euismod urna vel fringilla justo.
                  </p>
                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>
                        <i className="icon-car" />
                        Sport
                      </li>
                      <li>
                        <i className="icon-road2" />
                        12,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="featured-item col-md-15 col-sm-6">
                <img
                  src="http://dummyimage.com/310x210/cccccc/fff.jpg"
                  alt=""
                />
                <div className="down-content">
                  <a href="single-list.html">
                    <h2>mercedes amg gt</h2>
                  </a>
                  <span>65,000</span>
                  <div className="light-line" />
                  <p>
                    Donec eu nullas sapien pretium volutpat vel quis turpis.
                    Donec vel risus lacinia euismod urna vel fringilla justo.
                  </p>
                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>
                        <i className="icon-car" />
                        Sport
                      </li>
                      <li>
                        <i className="icon-road2" />
                        12,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="featured-item col-md-15 col-sm-6">
                <img
                  src="http://dummyimage.com/310x210/cccccc/fff.jpg"
                  alt=""
                />
                <div className="down-content">
                  <a href="single-list.html">
                    <h2>bmw m4 430D</h2>
                  </a>
                  <span>64,000</span>
                  <div className="light-line" />
                  <p>
                    Donec eu nullas sapien pretium volutpat vel quis turpis.
                    Donec vel risus lacinia euismod urna vel fringilla justo.
                  </p>
                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>
                        <i className="icon-car" />
                        Sport
                      </li>
                      <li>
                        <i className="icon-road2" />
                        12,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="featured-item col-md-15 hidden-sm">
                <img
                  src="http://dummyimage.com/310x210/cccccc/fff.jpg"
                  alt=""
                />
                <div className="down-content">
                  <a href="single-list.html">
                    <h2>audi a6 s-line</h2>
                  </a>
                  <span>48,000</span>
                  <div className="light-line" />
                  <p>
                    Donec eu nullas sapien pretium volutpat vel quis turpis.
                    Donec vel risus lacinia euismod urna vel fringilla justo.
                  </p>
                  <div className="car-info">
                    <ul>
                      <li>
                        <i className="icon-gaspump" />
                        Diesel
                      </li>
                      <li>
                        <i className="icon-car" />
                        Sport
                      </li>
                      <li>
                        <i className="icon-road2" />
                        12,000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        </div>
    );
};
