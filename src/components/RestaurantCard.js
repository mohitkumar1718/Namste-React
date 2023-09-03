import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/userContext";

const RestaurantCard=(props)=>{
   const {resData}=props;
   const cloudinaryImageId= resData?.info?.cloudinaryImageId;
   const name=resData?.info?.name;
   const cuisines=resData?.info?.cuisines;
   const avgRating=resData?.info?.avgRating;
   const deliveryTime=resData?.info?.sla?.deliveryTime;
   const costForTwo=resData?.info?.costForTwo;
   const data=useContext(userContext);
   let cuisine=[];
   if(cuisines.length>3){
    cuisine.push(cuisines[0]);
    cuisine.push(cuisines[1]);
    cuisine.push(cuisines[2]);
   }
   else cuisine=cuisines;
   
 
    return(
      <div className="m-4  p-4 w-[270px] h-[400px] bg-gray-100 hover:bg-green-100 hover:shadow-xl rounded-lg cursor-pointer  ">
         <img  className="res-logo  rounded-lg  h-[200px] w-[240px]" src={CDN_URL+cloudinaryImageId}  alt="img" />
  
         <h4 className=" font-bold py-2 text-lg">{name}</h4>
         <h4 className=" from-neutral-500">{ cuisine.join(", ")}</h4>
         <h4 >{deliveryTime} min &nbsp;&emsp; &emsp;&emsp;Rating:{avgRating}⭐</h4>
         <h4> </h4>
         <h4>{costForTwo}</h4>
          <h4>{data.loginUser}</h4>
      </div>
    )
  }
  
  export  const RestaurantLabel=(RestaurantCard)=>{
    return (props)=>{
     return(
      <div>
        <label className=" absolute bg-green-400 colo text-white mx-4 p-2  rounded-lg justify-start">Promoted</label>;
        <RestaurantCard  {...props}/>
      </div>  
     
      
     )
    }
  }
  
  export default RestaurantCard;