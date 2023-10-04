import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="about-us">
                <img src="assets/images/logo_3.png" alt="" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-us">
                <p>
                  {t(
                    "Maecenas ne mollis orci. Phasell iacu sapie non aliquet exeuismo ac."
                  )}
                </p>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" />
                    {t("Raver Croft Drive Knoxville, 37921")}
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    {t("+55 417-634-7071")}
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    {t("contact@RO.com")}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="featured-links">
                <h4> {t("Featured Links")}</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      {t("Home")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      {t("Inventory")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      {t("Financing")}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right" />
                      {t("Contact")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p>
                Copyrights 2024 <em>Primo Carthage</em>. Developed by{" "}
                <em>RO</em>
              </p>
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
