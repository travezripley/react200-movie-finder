# Movie Finder

## Third and Final Project in the React200 * Module @ San Diego Code School

# Stay tuned today, KTRAV Channel 13 We will be bringin you, your local headlines with: 

# Author - Michel Roberts JR.

# Modified by Travis Ripley, * Started Wednesday May 15th, 2019 13:30

## Right after this commercial break:


## Introduction

The goal of this project is to build a Movie Finder application using [React](https://redux.js.org), [Redux](https://github.com/reactjs/react-redux) and [React Router](https://reacttraining.com/react-router/).  This application will allow users to search for movies and view more information by clicking on a movie. 

For this project, you can pay for and use the [OMDB API](http://omdbapi.com) directly, or deploy and use the Express app you built in NODE101 to leverage it's caching capability.

## Prerequisites

Here are some helpful links you should checkout both before, during, and after completing this project:

1. Article: [Global Mutable State](https://dev.to/ericnormand/global-mutable-state)
2. Video: [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
3. Article: [A Cartoon Intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
4. Article: [A process for building React+Redux applications](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a)
5. Docs: [Redux](https://redux.js.org)
7. Docs: [React Redux](https://github.com/reactjs/react-redux)
6. Docs: [React Router](https://reacttraining.com/react-router/)

## Walkthrough

---
## Step 1 - Initialize the Project
---

First, clone the project from [Github](https://github.com/SanDiegoCodeSchool/react200-movie-finder)

---
## Step 2 - Install/Configure Redux
---

Next, go ahead and install `redux`, `redux-promise-middleware` and `react-redux` via npm.

```bash
$ npm install redux redux-promise-middleware react-redux
```

Then, add the following code to `./src/js/index.jsx` to:

- Import components from `redux` and `react-redux`
- Import `promiseMiddleware`
- Configure [Redux Dev Tools](https://github.com/gaearon/redux-devtools) in [a way that works with Redux Middleware](https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup)
- Create a Redux store
- Add [promise middleware](https://github.com/pburtchaell/redux-promise-middleware) to Redux.

```js
/* Add these imports */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
```
```js
/* Add these statements */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));

/* Update render method invoke */
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---
## Step 3 - Install/Configure `react-router`
---

First, install `react-router` and `react-router-dom`
```bash
$ npm i react-router react-router-dom
```

Then, add these components to the project, creating folder structure as you go.

> Note: These components will eventually become your **container** components.

`./src/js/containers/MovieSearchContainer.jsx`
```js
import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Search Container</h1>
      </div>
    )
  }
}

export default MovieSearchContainer;
```


`./src/js/containers/MovieDetailContainer.jsx`
```js
import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Detail Container</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default MovieDetailContainer;
```

Then, add the following to `./src/js/app.jsx`

```js
/* Add these import statements */
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
```
```jsx
/* Incorporate this example into your code */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    )
  }
}
```

Check that routing is configured correctly:

- Run `npm start`
- Open `http://localhost:3000/` in Chrome and verify that the Search screen appears
- Open `http://localhost:3000/movie/1` in Chrome and verify that the Detail screen appears, and the number 1 is present in the DOM. Change `1` in the URL to some other value and check that the value changes in the DOM also.

If the above worked, move on to Step 4.

---
## Step 4 - Create Movie Search Screen
---

This screen should allow a user to enter a search term, click `Go!`, then see a collection of matching movies. Each movie should include a **poster**, the **title**, the **release year**, and a brief **plot** synopsis. It should also take users to the **Movie Detail Screen** after clicking `More Information`.

<a href="https://i.imgur.com/G6N2QbT.png">![](https://i.imgur.com/G6N2QbT.png)</a>

Handing the reins over to you now - perform the steps recommended in [A process for building React/Redux applications](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a) to build out the screen:

- Mentally divide the screen into **presentational** components and document what those are in a text file.
- Write down what the **state** and **actions** for each component will be in your text file.
- Create **action creators** that create actions.
- Build **reducers** to handle dispatched **actions**.
- Build **presentational** components.
- Build **container** component, and compose **presentational** components within it's render method.

---
## Step 5 - Create Movie Detail Screen
---

This screen is accessed when the user clicks `More Information` on a movie found in **Movie Search Screen**. The IMDB id should be provided in the URL (e.g. `/movie/tt0111161`), you can use this to make your HTTP request to OMDB/Your API. 

The user should ultimately use this screen to see information about the requested movie, and be able to click a `Go Back` button that will take them back to the **Movie Search Screen**.

<a href="https://i.imgur.com/4PVy9jB.png">![](https://i.imgur.com/4PVy9jB.png)</a>

- Mentally divide the screen into **presentational** components and document what those are in a text file.
- Write down what the **state** and **actions** for each component will be in your text file.
- Create **action creators** that create actions.
- Build **reducers** to handle dispatched **actions**.
- Build **presentational** components.
- Build **container** component, and compose **presentational** components within it's render method.

---
## Step 6 - Write tests
---

- If you haven't already done so, install `mocha` and `chai` as dev dependencies for your project.
- Use what you learned in OPS200 to write ten passing unit tests.

---
## Step 7 - Deploy and Submit
---

- Deploy this application to Heroku.
- Paste the URL of your Heroku application in the submission.

---

## Exit Criteria
- Should implement React Router.
- Should implement Redux and suggested additional dependencies.
- Should allow user to search for movies and see displays enumerated on the page.
- Should allow user to click on one of those movies to see more information.
- Should have at least ten passing mocha tests.

## Bonus Features
- Polish: Try out different frameworks such as Bulma, Pure.css, Kube, or Materialize.
- Integrate your work from NODE101 to leverage it's caching capabilities.

## Project Submission
To submit this project for instructor evaluation, please do the following:

* Push this project to GitHub
* Create a Heroku application
* Create a CircleCI project
* Configure automatic Heroku deployment
* Trigger a successful deployment

Once you have done the above, [Submit your project](https://goo.gl/forms/wx8DLSus7s88lk043)

##