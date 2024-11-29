import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const ctx = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); //Subscribing store with selector

  return (
    <div className="flex justify-between bg-green-50 shadow-md mb-2">
      <img className="w-28" alt="Freshly Food logo" src={LOGO_URL} />
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          <li className="px-4">
            {" "}
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}>
              {btnName}
            </button>{" "}
          </li>
          {btnName === "Login" && (
            <li className="px-4 font-bold">{ctx.loggedInUser}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
