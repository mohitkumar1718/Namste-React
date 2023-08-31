import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
  
   const {resID}=useParams();
   const ResInfo=useRestaurantMenu(resID);
   
   if( ResInfo===null) return <Shimmer/>;

   const {name,cuisines,avgRating}=ResInfo?.cards[0]?.card?.card?.info;
 
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
    </ul>
 </div>
 )
     
}
export default RestaurantMenu;