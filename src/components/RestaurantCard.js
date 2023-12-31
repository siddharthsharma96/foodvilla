import { RESTAURANT_IMG_URL } from "../common/restaurant_img_url";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    cloudinaryImageId,
  } = props.res_details;

  return (
    <div className="restaurant-card">
      <img
        src={`${RESTAURANT_IMG_URL}${cloudinaryImageId}`}
        alt="rest-pic"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>

      <div className="res-info">
        <p>{avgRating}</p>
        <p>{deliveryTime}</p>
        <p> {costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
