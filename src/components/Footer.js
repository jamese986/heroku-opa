import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <hr />
      <footer className="col-md-12 footer">
        <div className="mb-medium footer-social">
          <a href="https://www.facebook.com/dmuleicester">
            <i className="fa fa-facebook fa-2x edit-icon" />
          </a>
          <a href="https://twitter.com/dmuleicester">
            <i className="fa fa-twitter fa-2x edit-icon" />
          </a>
          <a href="https://plus.google.com/103011102637243054782/posts">
            <i className="fa fa-google-plus fa-2x edit-icon" />
          </a>
          <a href="index.html">
            <i className="fa fa-home fa-2x edit-icon" />
          </a>
        </div>
        <div className="bg-dark  copyright-tag">
          17-3110-AA © <br />| Secure Web Assignment 2017 |<a href>sitemap</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
