import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
   const {resData}=props;
   const cloudinaryImageId= resData?.info?.cloudinaryImageId;
   const name=resData?.info?.name;
   const cuisines=resData?.info?.cuisines;
   const avgRating=resData?.info?.avgRating;
   const deliveryTime=resData?.info?.sla?.deliveryTime;

 
    return(
      <div className="res-card">
         <img  className="res-logo" src={CDN_URL+cloudinaryImageId}  alt="img" />
         
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}⭐</h4>
         <h4>{deliveryTime} minutes </h4>
      </div>
    )
  }
  export default RestaurantCard;