/* global define, it, describe, beforeEach, document */
const express = require("express");
const path = require("path");
const Nightmare = require("nightmare");
const expect = require("chai").expect;
const axios = require("axios");
const Actions = require("nightmare-react-utils").Actions;

Nightmare.action(...Actions);

const app = express();
app.use(express.static(path.join(__dirname, "/../public")));
app.use(express.static(path.join(__dirname, "/../dist")));

const url = "http://localhost:8888";

const nightmare = new Nightmare();

describe("End to End Tests", function() {
  this.timeout(12000);
  let httpServer = null;
  let pageObject = null;

  before(done => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after(done => {
    httpServer.close();
    done();
  });

  it("should display/have the correct page title", () => {
    return pageObject
      .evaluate(() => document.querySelector("body").innerText)
      .then(text => {
        expect(text).to.contain("Movie Search");
      });
  });

  it('should include a <input> element with id of "movieInput" for the user to enter', () => {
    return pageObject
      .wait()
      .evaluate(() => document.querySelector("input[id=movieInput]").innerText)
      .then(input => {
        expect(input).to.exist;
      });
  });

  it("should be able to enter a movie title into <input> element", () => {
    return pageObject
      .wait()
      .type("input[id=movieInput]", "home")
      .evaluate(() => document.querySelector("input[id=movieInput]").value)
      .then(text => {
        expect(text).to.equal("home");
      });
  });

  it("should have a <button> element, that is clicked to get movies", () => {
    return pageObject
      .wait()
      .evaluate(() => document.querySelector("button[id=button-addon2]").value)
      .then(button => {
        expect(button).to.exist;
      });
  });

  it("returns the correct status code", () =>
    axios.get(url).then(response => expect(response.status === 200)));
});
