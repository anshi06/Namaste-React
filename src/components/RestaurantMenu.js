import React from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, resMenuCategories] = useRestaurantMenu();
  const [showList, setShowList] = useState(-1); //Store index of shown list

  return resInfo ? (
    <div className="text-center">
      <div className="flex justify-center items-center">
        <img
          className="w-3/12"
          alt="res-image"
          src={CDN_URL + resInfo.cloudinaryImageId}
        />
      </div>
      <h1 className="font-bold m-3 text-2xl">{resInfo.name}</h1>
      <h3 className="font-bold text-lg">{resInfo.cuisines.join(", ")}</h3>

      {resMenuCategories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showList={showList === index}
          onClickCategory={() => {
            if (showList === index) setShowList(-1);
            else setShowList(index);
          }}
        />
      ))}
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
