import React from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const [resInfo, resMenu] = useRestaurantMenu();

  return resInfo ? (
    <div>
      <img alt="res-image" src={CDN_URL + resInfo.cloudinaryImageId} />
      <h1>{resInfo.name}</h1>
      <h3>{resInfo.cuisines.join(", ")}</h3>
      <h3>{resInfo.costForTwoMessage}</h3>
      <h2> Menu </h2>
      <ul>
        {resMenu.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name}- {menu.card.info.price / 100} Rs.
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
