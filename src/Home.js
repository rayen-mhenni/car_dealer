import React from "react";

export const Home = () => {
    return (
        <div className="cover">

            <div className="card">

                <div className="car-logo">

                    <a href="index.html">
                        <img src="assets/images/logo-card.png" alt="" />
                    </a>

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
                        <select name="mark" id="make">
                            <option value={-1}>Select Makes</option>
                            <option>Price</option>
                            <option>Miles</option>
                            <option>Year</option>
                            <option>Near</option>
                        </select>
                    </div>

                    <div className="select">
                        <select name="mark" id="make">
                            <option value={-1}>Select Makes</option>
                            <option>Price</option>
                            <option>Miles</option>
                            <option>Year</option>
                            <option>Near</option>
                        </select>
                    </div>

                    <div className="advanced-button-cover">
                        Search Now
                    </div>


                </div>


            </div>

        </div>
    );
};
