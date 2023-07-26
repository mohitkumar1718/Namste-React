import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const name=resData.data.data.name;
    const rating=resData.data.data.avgRating;
    const time=resData.data.data.deliveryTime;
 
    return(
      <div className="res-card">
         <img  className="res-logo" src={CDN_URL+ resData.data.data.cloudinaryImageId}  alt="img" />
      <h3>{name}</h3>
         <h4>{resData.data.data.cuisines.join(", ")}</h4>
         <h4>{rating}⭐</h4>
         <h4>{time} minutes </h4>
      </div>
    )
  }
  export default RestaurantCard;