import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { PromotedRestaurantCard } from "./RestaurantCard";
import UserContext from "../context/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard)

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

  if(onlineStatus == false){
    return <h1>Looks like you're offline, Please check your internet connection!</h1>
  }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="m-4 p-4 w-3/4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
          className="px-4 py-1 bg-green-600 m-4 rounded-md"
          onClick={() => {
            const filteredRes = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(filteredRes);
          }}>Search</button>
        </div>
        <div className="m-4 p-4">
        <button
          className="px-4 py-1 bg-gray-200 m-4 rounded-lg"
          onClick={() => {
            const filteredRes = restaurants.filter((res) => res.rating > 4.0);
            setRestaurants(filteredRes);
          }}>
          Top Rated Restaurant
        </button>
        </div>

        <div className="m-4 p-4">
          <label>UserName: </label>
        <input
          className="px-4 py-1 bg-gray-50 m-4 rounded-lg border border-black"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}/>
         
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/"+ res.info.id}>
            {res?.info?.promoted ? <RestaurantCardPromoted resData={res}/> :<RestaurantCard resData={res} />}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
