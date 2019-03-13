import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Cards from "./Works/Cards";
import "../styles/worksStyle.css";

const Works = () => {
  return (
    <CSSTransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Cards />
    </CSSTransitionGroup>
  );
};

export default Works;
