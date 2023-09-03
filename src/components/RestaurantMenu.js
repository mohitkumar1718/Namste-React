import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
  
  const {resID}=useParams();
  const ResInfo=useRestaurantMenu(resID);
  const [showIndex,setShowIndex]=useState(0);
   
   if( ResInfo===null) return <Shimmer/>;

   const {name,cuisines,avgRating}=ResInfo?.cards[0]?.card?.card?.info;
 
   const category=ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  //  console.log(category);
 
 
 return (
 <div className=" text-center">
    <h1 className="font-bold my-6 text-2xl ">{name}</h1>
    <p className="font-semibold text-lg">{cuisines.join(", ")}</p>
    <h4>Rating: {avgRating}⭐</h4>
    <div>
      { category.map((category,index)=>(
        <RestaurantCategory 
        key={category?.card?.card?.title} 
        data={category}
        showItem={showIndex==index && true}
        setShowIndex={()=>setShowIndex(index)}
        />
        )) }
    </div>
    
 </div>
 )
     
}
export default RestaurantMenu;