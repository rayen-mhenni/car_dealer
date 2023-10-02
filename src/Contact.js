import React from 'react'

function Contact() {
    return (
        <div>
            <div id="page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Contact Us</h1>
                            <div className="line" />
                            <span>Praesent volutpat nisi sed imperdiet facilisis felis turpis fermentum lectus</span>
                        </div>
                    </div>
                </div>
            </div>






            <div className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <input type="text" className="name" name="s" placeholder="First name" defaultValue />
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <input type="text" className="email" name="s" placeholder="Email address" defaultValue />
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <input type="text" className="site" name="s" placeholder="Phone" defaultValue />
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <input type="text" className="phone" name="s" placeholder="Your website	" defaultValue />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <textarea id="message" className="message" name="message" placeholder="Write message" defaultValue={""} />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="advanced-button">
                                                <a href="#">Send Message<i className="fa fa-paper-plane" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info">
                                <div className="phone">
                                    <h4>Phone</h4>
                                    <span>+33 20966400 1342</span>
                                </div>
                                <div className="fax">
                                    <h4>Fax</h4>
                                    <span>+33 20966400 1342</span>
                                </div>
                                <div className="email">
                                    <h4>Email</h4>
                                    <a href="#">info@auction.com</a>
                                </div>
                                <div className="address">
                                    <h4>Address</h4>
                                    <span>2855 Simpson Square<br />Coldwater, OK 67029</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <>MAP HERE !</>
            <div id="map" />
        </div>
    )
}

export default Contact