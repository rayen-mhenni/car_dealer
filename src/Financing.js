import React from "react";
import Footer from "./Footer";

function Financing() {
  return (
    <>
      <div className="inventory">
        <div id="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Financing Us</h1>
                <div className="line" />
                <span>Your dream car is just a visit away!</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-form">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-form">
                    <form
                      id="contact_form"
                      action="#"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="row">
                        <h4>PERSONAL INFORMATION</h4>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Title
                          <input type="text" name="s"  />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          First name *
                          <input type="text" name="s" placeholder="" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Last name *
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Date of birth *
                          <input type="text" name="s"  />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          SIN
                          <input type="text" name="s"  />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Email *
                          <input type="text" name="s" placeholder="" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Phone *
                          <input type="text" name="s" placeholder="Phone" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <h4>CONTACT INFORMATION</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Current Address Duration (years)
                          <input type="text" name="s"  />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Street *
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          City *
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Province*
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Postal Code *
                          <input type="text" name="s" />
                        </div>
                      </div>

                      <br />
                      <div className="row">
                        <h4>CURRENT JOB</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Company
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Position
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Duration (Years)
                          <input type="text" name="s" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <h4>FINANCIAL INFORMATION</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Monthly Income
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Residential Status
                          <input type="text" name="s" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Monthly Rent / Mortgage
                          <input type="text" name="s" />
                        </div>
                      </div>
                      <div className="row">
                        <br />
                        <h4>Disclosure & Privacy Notice</h4>
                        <br />
                      </div>
                      <div className="row">
                        <span>
                          By checking this box, I consent to the collection, use
                          and disclosure of my personal information as described
                          in this paragraph. I agree that the personal information
                          provided above may be used and disclosed by Mon
                          Automobile and/or its agents or service providers
                          (collectively, the "Dealer") as necessary to obtain
                          credit, financial and related personal information
                          (including a credit or consumer information report)
                          about me from any credit bureau or credit reporting
                          agency, and to advise me on credit availability in
                          connection with product and/or service purchase
                          financing. Personal information I provide and credit
                          information obtained may also be retained by Dealer and
                          used to facilitate the application process should I
                          subsequently choose to apply for credit through Dealer.
                        </span>
                        <br />
                        <strong>
                          *<input type="checkbox" name="s" />I have read and agree
                          to the Terms & Conditions above.
                        </strong>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="advanced-button">
                          <a href="#">
                            Submit
                            <i className="fa fa-paper-plane" />
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>

  );
}

export default Financing;
