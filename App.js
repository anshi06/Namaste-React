import React from "react";
import ReactDOM from "react-dom/client";

//creating a element is core thing of react.
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);
const heading = React.createElement(
  "h1",
  { id: "heading" }, //Responsible to give attributes to the element
  "Hello world from React!" //Children
);

console.log(heading); //Object, In the end it is an react element.

//creating the root is the job of react dom.
const root = ReactDOM.createRoot(document.getElementById("root")); //created root for react.

root.render(parent); //Append heading inside root div.
