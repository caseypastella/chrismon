import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 footertitle">
              <h5 className="text-uppercase">Chrismon Care Landscaping</h5>

              <p>
                For beautiful and professional landscape services, Chrismon Care
                Landscaping has years of experience in commerical and
                residential landscapes. We can create the yard of your dreams or
                maintain your existing beautiful landscape.
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="text-uppercase">Social Media</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    target="_blank"
                    title="follow me on facebook"
                    href="https://www.facebook.com/PLACEHOLDER"
                  >
                    <img
                      alt="follow me on facebook"
                      src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png"
                      border="0px"
                    />{" "}
                    Follow Us on Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-uppercase">Services</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/pruning">Pruning</a>{" "}
                </li>
                <li>
                  <a href="/hardscapes">Hardscapes</a>{" "}
                </li>
                <li>
                  <a href="/installs">Mulch and Bed Installs</a>
                </li>
                <li>
                  <a href="/lawncare">Lawn Care</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center pt-3">
          @2020 Copyright: <a href="/">Chrismoncarelandscaping.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
