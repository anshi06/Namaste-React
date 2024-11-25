import React, { useEffect, useState } from "react";
import { CDN_URL, RESTAURANTS_MENU_API } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANTS_MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  };

  return resInfo ? (
    <div>
      <img alt="res-image" src={CDN_URL+ resInfo.cloudinaryImageId}/>
      <h1>{resInfo.name}</h1>
      <h3>{resInfo. cuisines.join(", ")}</h3>
      <h3>{resInfo.costForTwoMessage}</h3>
      <h2> Menu </h2>
      <ul>
       {resMenu.map((menu) => <li key={menu.card.info.id}>{menu.card.info.name}- {menu.card.info.price/100} Rs.</li>)}
      </ul>
    </div>
  ) : <Shimmer/>;
};

export default RestaurantMenu;
