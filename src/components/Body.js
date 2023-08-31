import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mokdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
   const [ListOfRestaurants ,setListOfRestaurant]=useState([]);
   const [list,setList]=useState(ListOfRestaurants);
   const[searchText,setSearchText]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5211086&lng=77.2410541&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
   
      setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
    }
  const status=useOnlineStatus();
  if(status===false)return <h1>You are offline</h1>;
    
    return (ListOfRestaurants.length===0)? <Shimmer/>: (
      
       <div className="body">
          <div className="filter">
          <div className="search">
            {/* search logic */}
            <input type="text" name="" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
            <button onClick={()=>{
               const filterRestaurant=list.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
               setListOfRestaurant(filterRestaurant);
            }}>Search</button>
         </div>
             <button className="filter-btn" onClick={()=>{
            //   filter logic for rating above 2
              let filterList=ListOfRestaurants.filter((res)=>res?.info?.avgRating>4);
               setListOfRestaurant(filterList);
            
             }}>Top Rated Restaurant</button>
          </div>
          <div className="res-container">
           {ListOfRestaurants.map((restaurant)=> (
             <Link key={restaurant.info?.id} to={"/restaurant/"+restaurant.info?.id}><RestaurantCard  resData={restaurant}/></Link>
 
           ))}
          
            {/* <RestaurantCard resData={resLists[0]}/> */}
           
           
          </div>
 
       </div>


    



    )
 }
 export default Body;