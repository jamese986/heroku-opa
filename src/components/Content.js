import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Works from "./Works";
import About from "./About/About";
import Data from "./DataVis/DataVis";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
      <Route path="/data" component={Data} />
    </Switch>
  );
};

export default Content;
