import React from "react";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1 className="display-4 mb-4text-center">Movie Finder</h1>

          <div className="input-group mb-2">
            <input
              className="form-control search-movie"
              id="movieInput"
              type="text"
              placeholder="Enter a frickin' Movie"
              aria-label="Movie Contains..."
              aria-describedby="button-addon2"
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary search"
                id="button-addon2"
                type="submit"
                onClick={this.handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    
    
    
    );
  }
}

export default MovieSearchContainer;
