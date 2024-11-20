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
//Creating React element using core react.
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);

console.log(heading); //Object, In the end it is an react element.

//JSX
const jsxHeading = <h1 id="head">JSX Heading</h1>; //React Element using JSX

console.log(jsxHeading); //Object //jsxHeading is same as heading

//creating the root is the job of react dom.
const root = ReactDOM.createRoot(document.getElementById("root")); //created root for react.

//Component Composition
const Title = () => <h2>Title</h2>;
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {Title()}
      <Title></Title>
      <h1>This is Heading Component.</h1>
    </div>
  );
};

root.render(<HeadingComponent />); //Append heading inside root div.
