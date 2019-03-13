import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <hr />
      {/* Footer Start*/}
      <footer className="footer-c footer-light section-padding text-center">
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
        <div className="copyright-tag">
          @jamese986 © | Single Page React App |
        </div>
      </footer>
      {/* Footer End --
       */}
    </Fragment>
  );
};

export default Footer;
