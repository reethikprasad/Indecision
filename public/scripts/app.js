"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision app",
  subtitle: "This is some infoo",
  options: []
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location : ",
      location
    );
  }
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title,
    " "
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.subtitle.length > 0 ? "Here are your options" : "no options",
    " "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "First item"
    ),
    React.createElement(
      "li",
      null,
      "Second item"
    )
  )
);

var user = {
  name: "Reethik",
  age: 20,
  location: "Odisha"
};

var templatetwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age : ",
    user.age,
    " "
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
