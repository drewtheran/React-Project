import React from 'react';
function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Headquarters</h5>
                    <address>
                        1 Venom Way <br />
                        Jacksonville, FL 32034<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+15087357708"><i className="fa fa-phone"></i>1-508-735-7708</a> <br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i>coyote@codevenom.co</a>
                </div>
            </div>
        </div>
    );
}

export default Contact