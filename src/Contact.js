import React from "react";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="inventory">
      <div id="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>{t("Contact Us")}</h1>
              <div className="line" />
              <span> {t("Your dream car is just a visit away!")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-form">
                <form
                  id="contact_form"
                  action="#"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        className="name"
                        name="s"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        className="email"
                        name="s"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        className="site"
                        name="s"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        className="phone"
                        name="s"
                        placeholder="Your website	"
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        id="message"
                        className="message"
                        name="message"
                        placeholder="Write message"
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="advanced-button">
                        <a href="#">
                          {t("Send Message")}
                          <i className="fa fa-paper-plane" />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="phone">
                  <h4> {t("Phone")}</h4>
                  <span>{t("+33 20966400 1342")} </span>
                </div>
                <div className="fax">
                  <h4> {t("Fax")}</h4>
                  <span>{t("+33 20966400 1342")}</span>
                </div>
                <div className="email">
                  <h4> {t("Email")}</h4>
                  <span>{t("test@RO.com")}</span>
                </div>
                <div className="address">
                  <h4>{t("Address")}</h4>
                  <span>
                    {t("2855 Simpson Square")}
                    <br />
                    {t("Coldwater, OK 67029 ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        className="map"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Québec,%20Canada+(Québec)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="450"
        title="myFrame"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <Footer />
    </div>
  );
}

export default Contact;
