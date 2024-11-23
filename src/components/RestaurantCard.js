const RestaurantCard = ({ resData }) => {
  const { resName, rating, cusins, deliveryTime, imageId, costForTwo } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={imageId}
      />
      <h3>{resName}</h3>
      <h4>{cusins}</h4>
      <h4>{rating + " stars"}</h4>
      <h4>{`Rs. ${costForTwo/100}`}</h4>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
