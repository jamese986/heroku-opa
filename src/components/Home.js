import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Steps from "./Home/Steps";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="alert alert-dismissible alert-warning">
        <button type="button" className="close" data-dismiss="alert">
          ×
        </button>
        <h4 className="alert-heading">Warning!</h4>
        <p className="mb-0">
          Best check yo self, you're not looking too good. Nulla vitae elit
          libero, a pharetra augue. Praesent commodo cursus magna,{" "}
          <Link to="http://facebook.com/" className="alert-link">
            vel scelerisque nisl consectetur et
          </Link>
          .
        </p>
      </div>
      <Steps />
    </CSSTransitionGroup>
  );
};

export default Home;
