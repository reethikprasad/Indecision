console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision app",
  subtitle: "This is some infoo",
  options: [],
};

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}

var template = (
  <div>
    <h1>{app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.subtitle.length > 0 ? "Here are your options" : "no options"} </p>
    <ol>
      <li>First item</li>
      <li>Second item</li>
    </ol>
  </div>
);

var user = {
  name: "Reethik",
  age: 20,
  location: "Odisha",
};

var templatetwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age : {user.age} </p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
