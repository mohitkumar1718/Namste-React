import RestaurantCard from "./RestaurantCard";
import reslists from "../utils/mokdata";
import { useState } from "react";
const Body=()=>{
   const [listOfRestaurant,setlistOfRestaurant]=useState(reslists)
   
    return (
       <div className="body">
       
          <div className="filter">
             
             <button className="filter-btn" onClick={()=>{
              // filter logic
              let filterList=listOfRestaurant.filter((res)=>res.data.data.avgRating>4);
              setlistOfRestaurant(filterList);
            
             }}>Top Rated Restaurant</button>
          </div>
          <div className="res-container">
           {listOfRestaurant.map((restaurant)=>(
             <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
 
           ))}
           {/* <RestaurantCard resData={reslists[0]}/>
           <RestaurantCard resData={reslists[1]}/>
           <RestaurantCard resData={reslists[2]}/>
           <RestaurantCard resData={reslists[3]}/>
           <RestaurantCard resData={reslists[4]}/>
           <RestaurantCard resData={reslists[5]}/> */}
           
          </div>
 
       </div>
    )
 }
 export default Body;