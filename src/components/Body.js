import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => {
            const filteredRes = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(filteredRes);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = restaurants.filter((res) => res.rating > 4.0);
            setRestaurants(filteredRes);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
