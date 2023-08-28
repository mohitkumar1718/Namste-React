import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{
   const [ResInfo,SetResInfo]=useState(null);
   const {resId}=useParams();
   console.log(resId);
   
   useEffect(()=>{
      fetchMenu();
   },[]);
   const fetchMenu= async ()=>{
      const data= await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
      const json= await data.json();
      console.log(json);
      SetResInfo(json.data);
      
   };
   if( ResInfo===null) return <Shimmer/>;
   // {console.log(ResInfo?.cards[0]?.card?.card?.info?.name)};
   const {name,cuisines,avgRating}=ResInfo?.cards[0]?.card?.card?.info;
   // const {name,cuisines}=ResInfo?.cards[0]?.card?.card?.info;
   const {itemCards}=ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log(itemCards);

 
 return (
 <div>
    <h1>{name}</h1>
    <h4>{cuisines.join(", ")}</h4>
    <h4>Rating: {avgRating}⭐</h4>
    <h2>Menu</h2>
    <ul>
      <h2>Recommanded</h2>
      { itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} -{"Rs"} {item.card.info.price/100 ||item.card.info.defaultPrice/100}</li>)
      }

        {/* <li>{itemCards[0].card?.info?.name}</li>
        <li>{itemCards[1].card?.info?.name}</li>
        <li>{itemCards[2].card?.info?.name}</li>
        <li>{itemCards[3].card?.info?.name}</li>
        <li>{itemCards[4].card?.info?.name}</li>
        <li>{itemCards[5].card?.info?.name}</li>
        <li>Fries</li>
        <li>Cold Drinks</li> */}
    </ul>
 </div>
 )
     
}
export default RestaurantMenu;