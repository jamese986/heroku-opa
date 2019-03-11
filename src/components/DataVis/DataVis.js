import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
// import Chart from "./components/chart";
import Chart from "./Chart";

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something went wrong");
        }
      })
      .then(response =>
        this.setState({
          results: response.results.filter(r => {
            return r.name === "JavaScript";
          })
        })
      );
  }

  render() {
    const { results } = this.state;

    return (
      <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="DataVis">
          <Chart data={results} />
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Data;
