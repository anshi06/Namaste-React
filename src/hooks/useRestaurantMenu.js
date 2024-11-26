import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { RESTAURANTS_MENU_API } from "../utils/constants";

const useRestaurantMenu = () => {
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
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return [resInfo, resMenu];
};

export default useRestaurantMenu;
