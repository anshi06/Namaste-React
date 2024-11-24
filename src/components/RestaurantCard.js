import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    sla
  } = resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
