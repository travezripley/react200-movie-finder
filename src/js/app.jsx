import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import MovieSearchContainer from "./containers/MovieSearch/index";
import MovieDetailContainer from "./containers/MovieDetails/index";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={MovieSearchContainer} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
