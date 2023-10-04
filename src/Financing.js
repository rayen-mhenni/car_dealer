import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";

function Financing() {
  const [Title, setTitle] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Dateofbirth, setDateofbirth] = useState("");
  const [SIN, setSIN] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [CurrentAddressDuration, setCurrentAddressDuration] = useState("");
  const [Street, setStreet] = useState("");
  const [City, setCity] = useState("");
  const [Province, setProvince] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Company, setCompany] = useState("");
  const [Position, setPosition] = useState("");
  const [Duration, setDuration] = useState("");
  const [MonthlyIncome, setMonthlyIncome] = useState("");
  const [ResidentialStatus, setResidentialStatus] = useState("");
  const [MonthlyRent, setMonthlyRent] = useState("");
  const [isDone, setisDone] = useState(false);
  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/api/financing", {
        Title,
        Firstname,
        Lastname,
        Dateofbirth,
        SIN,
        Email,
        Phone,
        CurrentAddressDuration,
        Street,
        City,
        Province,
        PostalCode,
        Company,
        Position,
        Duration,
        MonthlyIncome,
        ResidentialStatus,
        MonthlyRent,
      })
      .then((response) => {
        setisDone(true);
      });
  };
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
                        <br />

                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Title
                          <input
                            type="text"
                            name="s"
                            value={Title}
                            onChange={(val) => {
                              setTitle(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          First name *
                          <input
                            type="text"
                            name="s"
                            placeholder=""
                            value={Firstname}
                            onChange={(val) => {
                              setFirstname(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Last name *
                          <input
                            type="text"
                            name="s"
                            value={Lastname}
                            onChange={(val) => {
                              setLastname(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Date of birth *
                          <input
                            type="text"
                            name="s"
                            value={Dateofbirth}
                            onChange={(val) => {
                              setDateofbirth(val.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          SIN
                          <input
                            type="text"
                            name="s"
                            value={SIN}
                            onChange={(val) => {
                              setSIN(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Email *
                          <input
                            type="text"
                            name="s"
                            placeholder=""
                            value={Email}
                            onChange={(val) => {
                              setEmail(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Phone *
                          <input
                            type="text"
                            name="s"
                            placeholder="Phone"
                            value={Phone}
                            onChange={(val) => {
                              setPhone(val.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <br />
                      <hr />

                      <div className="row">
                        <h4>CONTACT INFORMATION</h4>
                        <br />
                      </div>

                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Current Address Duration (years)
                          <input
                            type="text"
                            name="s"
                            value={CurrentAddressDuration}
                            onChange={(val) => {
                              setCurrentAddressDuration(val.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Street *
                          <input
                            type="text"
                            name="s"
                            value={Street}
                            onChange={(val) => {
                              setStreet(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          City *
                          <input
                            type="text"
                            name="s"
                            value={City}
                            onChange={(val) => {
                              setCity(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Province*
                          <input
                            type="text"
                            name="s"
                            value={Province}
                            onChange={(val) => {
                              setProvince(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Postal Code *
                          <input
                            type="text"
                            name="s"
                            value={PostalCode}
                            onChange={(val) => {
                              setPostalCode(val.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <br />
                      <hr />
                      <div className="row">
                        <h4>CURRENT JOB</h4>
                        <br />
                      </div>

                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Company
                          <input
                            type="text"
                            name="s"
                            value={Company}
                            onChange={(val) => {
                              setCompany(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Position
                          <input
                            type="text"
                            name="s"
                            value={Position}
                            onChange={(val) => {
                              setPosition(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Duration (Years)
                          <input
                            type="text"
                            name="s"
                            value={Duration}
                            onChange={(val) => {
                              setDuration(val.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <br />
                      <hr />
                      <div className="row">
                        <h4>FINANCIAL INFORMATION</h4>
                        <br />
                      </div>

                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Monthly Income
                          <input
                            type="text"
                            name="s"
                            value={MonthlyIncome}
                            onChange={(val) => {
                              setMonthlyIncome(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Residential Status
                          <input
                            type="text"
                            name="s"
                            value={ResidentialStatus}
                            onChange={(val) => {
                              setResidentialStatus(val.target.value);
                            }}
                          />
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          Monthly Rent / Mortgage
                          <input
                            type="text"
                            name="s"
                            value={MonthlyRent}
                            onChange={(val) => {
                              setMonthlyRent(val.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <br />
                        <h4>Disclosure & Privacy Notice</h4>
                        <br />
                      </div>

                      <div className="row">
                        <span>
                          By checking this box, I consent to the collection, use
                          and disclosure of my personal information as described
                          in this paragraph. I agree that the personal
                          information provided above may be used and disclosed
                          by Mon Automobile and/or its agents or service
                          providers (collectively, the "Dealer") as necessary to
                          obtain credit, financial and related personal
                          information (including a credit or consumer
                          information report) about me from any credit bureau or
                          credit reporting agency, and to advise me on credit
                          availability in connection with product and/or service
                          purchase financing. Personal information I provide and
                          credit information obtained may also be retained by
                          Dealer and used to facilitate the application process
                          should I subsequently choose to apply for credit
                          through Dealer.
                        </span>
                        <br />
                        <strong>
                          *<input type="checkbox" name="s" />I have read and
                          agree to the Terms & Conditions above.
                        </strong>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="advanced-button">
                          <a
                            onClick={() => {
                              handleSubmit();
                            }}
                          >
                            Submit
                            <i className="fa fa-paper-plane" />
                          </a>
                        </div>
                        {isDone && (
                          <strong style={{ color: "green" }}>
                            thanks we have received ur request
                          </strong>
                        )}
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
