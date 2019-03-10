import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <ul className="social-icon animate pull-right">
            <li>
              <Link
                to="http://facebook.com/"
                className="nav-link"
                title="facebook"
                target="_blank"
              >
                <i className="fa fa-facebook" />
              </Link>
            </li>
            <li>
              <Link to="http://twitter.com/" title="twitter" target="_blank">
                <i className="fa fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="http://google.com/" title="google plus" target="_blank">
                <i className="fa fa-google-plus" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
