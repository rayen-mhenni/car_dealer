import React from 'react'

export default function Listing() {
    return (
        <div>

            <div id="page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Listing Results</h1>
                            <div className="line" />
                            <span>Praesent volutpat nisi sed imperdiet facilisis felis turpis fermentum lectus</span>
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
                                    <h4>Refine Your Search</h4>
                                </div>
                                <div className="search-form">
                                    <div className="select">
                                        <select name="mark" id="make">
                                            <option value={-1}>Select Makes</option>
                                            <option>Price</option>
                                            <option>Miles</option>
                                            <option>Year</option>
                                            <option>Near</option>
                                        </select>
                                    </div>
                                    <div className="select">
                                        <select name="mark" id="model">
                                            <option value={-1}>Select Car Model</option>
                                            <option>Price</option>
                                            <option>Miles</option>
                                            <option>Year</option>
                                            <option>Near</option>
                                        </select>
                                    </div>
                                    <div className="select">
                                        <select name="mark" id="style">
                                            <option value={-1}>Select Style</option>
                                            <option>Price</option>
                                            <option>Miles</option>
                                            <option>Year</option>
                                            <option>Near</option>
                                        </select>
                                    </div>
                                    <div className="slider-range">
                                        <p>
                                            <input type="text" className="range" id="amount" readOnly />
                                        </p>
                                        <div id="slider-range" />
                                    </div>
                                    <div className="select">
                                        <select name="mark" id="types">
                                            <option value={-1}>Select Car Types</option>
                                            <option>Price</option>
                                            <option>Miles</option>
                                            <option>Year</option>
                                            <option>Near</option>
                                        </select>
                                    </div>
                                    <div className="select">
                                        <select name="mark" id="color">
                                            <option value={-1}>Select Color</option>
                                            <option>Price</option>
                                            <option>Miles</option>
                                            <option>Year</option>
                                            <option>Near</option>
                                        </select>
                                    </div>
                                    <div className="advanced-button">
                                        <a href="listing-right.html">Search Now<i className="fa fa-search" /></a>
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

                                        <select name="mark" onClick={(e) => {
                                            console.log('rrrrrrrrrr', e.target.value)
                                        }}
                                            id="mark">
                                            <option value={-1}>Sorted by</option>
                                            <option>Price</option>
                                            <option>Miles</option>
                                            <option>Year</option>
                                            <option>Near</option>
                                        </select>
                                    </div>
                                    <div className="grid-list">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-list" /></a></li>
                                            <li><a href="#"><i className="fa fa-square" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="featured-item last-featured">
                                <img src="http://dummyimage.com/310x210/cccccc/fff.jpg" alt="" />
                                <div className="right-content">
                                    <a href="single-list.html"><h2>audi a6 tfsi s-line</h2></a>
                                    <span>48,000</span>
                                    <div className="light-line" />
                                    <p>Donec eu nullas sapien pretium volutpat vel quis turpis. Donec vel risus lacinia euismod urna vel fringilla justo.</p>
                                    <div className="view-details">
                                        <a href="#">View Details</a>
                                    </div>

                                    <div className="car-info">
                                        <ul>
                                            <li><i className="icon-gaspump" />Diesel</li>
                                            <li><i className="icon-car" />Sport</li>
                                            <li><i className="icon-road2" />12,000</li>
                                            <li><i className="icon-car" />Sport</li>
                                            <li><i className="icon-road2" />12,000</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="pagination">
                                <div className="prev">
                                    <a href="#"><i className="fa fa-arrow-left" />Prev</a>
                                </div>
                                <div className="page-numbers">
                                    <ul>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">...</a></li>
                                        <li><a href="#">14</a></li>
                                        <li ><a href="#">15</a></li>
                                        <li><a href="#">16</a></li>
                                        <li><a href="#">...</a></li>
                                        <li><a href="#">47</a></li>
                                    </ul>
                                </div>
                                <div className="next">
                                    <a href="#">Next<i className="fa fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}
