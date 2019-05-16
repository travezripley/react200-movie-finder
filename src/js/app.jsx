import React, { Component } from "react";

import { HashRouter as Router, Route } from "react-router-dom";


//import Components to be rendered here
import MovieSearchContainer from "./containers/MovieSearch/MovieSearchContainer";
import MovieDetailContainer from "./containers/MovieDetails/MovieDetailContainer";

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
