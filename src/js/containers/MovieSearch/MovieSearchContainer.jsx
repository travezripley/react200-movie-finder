import React from "react";
import MovieDetailContainer from "../MovieDetails/MovieDetailContainer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { updateMovieSearch, fetchMovies } from "./movieSearchActions";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.fetchDataClick = this.fetchDataClick.bind(this);
  }

  clickHandler(event) {
    window.location.assign(`/#/movie/${event.target.value}`);
  }

  handleMovieInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovieSearch(value));
  }

  fetchMovies(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(fetchMovies(value));
  }

  render() {
    const { movie, lineItems } = this.props;
    const noImageUrl =
      "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg";

    return (
      <Router>
        <div className="container">
          <div className="jumbotron mt-3">
            <h1 className="display-4 mb-4text-center">Movie Finder</h1>

            <div className="input-group mb-2">
              <input
                className="form-control search-movie"
                id="movieInput"
                type="text"
                onChange={this.handleChange}
                value={movie}
                placeholder="Enter a frickin' Movie"
                aria-label="Movie Contains..."
                aria-describedby="button-addon2"
              />

              <div className="input-group-append">
                <button
                  className="btn btn-primary search"
                  id="button-addon2"
                  type="submit"
                  onClick={this.fetchDataClick}
                  value={movie}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {lineItems.map(lineItem => (
            <div className="media rounded mb-3">
              <img
                src={lineItem.Poster != "N/A" ? lineItem.poster : noImageUrl}
                className="image-fluid img-thumbnail m-2"
                alt="No frickin poster available guy"
                width="20"
                height="auto"
              />

              <div className="media-body">
                <h5 className="my-1 title">
                  {lineItem.Title != "N/A"
                    ? lineItem.Title
                    : "No Title Available"}
                </h5>

                <p className="my-0 year">
                  {lineItem.Year != "N/A"
                    ? lineItem.Year
                    : "No Release Data Available"}
                </p>

                <hr />

                <p className="mb-5 plot">
                  {lineItem.Plot != "N/A"
                    ? lineItem.Plot
                    : "No Plot information Available"}
                </p>

                <button
                  className="btn btn-primary more-info"
                  id={"frog" + lineItems.indexOf(lineItem)}
                  onClick={this.clickHandler}
                  value={lineItem.imdbID}
                >
                  More Information
                </button>
              </div>
            </div>
          ))}
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}

export default MovieSearchContainer;
