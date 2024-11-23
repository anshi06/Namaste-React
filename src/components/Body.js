import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
const resList = [
  {
    resName: "Meghna Foods",
    rating: 4.4,
    cusins: "Pastry, Desserts, Cuisins",
    deliveryTime: "38mins",
    imageId:
      "https://res.cloudinary.com/eatbite/image/upload/v1714630033/restaurants/tmlohg2xcpcndejjqjsz.jpg",
    costForTwo: 40000,
  },
  {
    resName: "Velle Foods",
    rating: 3.4,
    cusins: "Pastry, Desserts, Cuisins",
    deliveryTime: "38mins",
    imageId:
      "https://res.cloudinary.com/eatbite/image/upload/v1714630033/restaurants/tmlohg2xcpcndejjqjsz.jpg",
    costForTwo: 40000,
  },
];

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredRes = restaurants.filter((res) => res.rating > 4.0);
            setRestaurants(filteredRes);
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
