import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Freshly Food logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jad6Wpa5VfaLaF8aoLnGsf4UxXuvnUseiQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/eatbite/image/upload/v1714630033/restaurants/tmlohg2xcpcndejjqjsz.jpg"
      />
      <h3>{resName}</h3>
      <h4>Pastry, Desserts, Cuisins</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghna Foods" />
        <RestaurantCard resName="Dominos" />
      </div>
    </div>
  );
};
export const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //created root for react.

root.render(<App />); //Append heading inside root div.
