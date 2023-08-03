import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mokdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
      // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
   
      setListOfRestaurant(
         //optional chaining
         json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
       )
       setList(
         json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

       )
       ;
   
    }

   //  conditional rendering
   //  if(ListOfRestaurants.length===0){
   //    return <Shimmer/>;
   //  }
   //  console.log("render is complete")
    return ListOfRestaurants.length===0? <Shimmer/> : (
      
       <div className="body">
       {/* {console.log(resLists)} */}
       
          <div className="filter">
          <div className="search">
            <input type="text" name="" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
            <button onClick={()=>{
               const filterRestaurant=list.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
               setListOfRestaurant(filterRestaurant);
            }}>Search</button>
         </div>
             <button className="filter-btn" onClick={()=>{
            //   filter logic
              let filterList=ListOfRestaurants.filter((res)=>res?.info?.avgRating>4);
               setListOfRestaurant(filterList);
            
             }}>Top Rated Restaurant</button>
          </div>
          <div className="res-container">
           {ListOfRestaurants.map((restaurant)=> (
             <RestaurantCard key={restaurant.info?.id} resData={restaurant}/>
 
           ))}
          
            {/* <RestaurantCard resData={resLists[0]}/>
           <RestaurantCard resData={resLists[1]}/>
            <RestaurantCard resData={resLists[2]}/>
           <RestaurantCard resData={resLists[3]}/>
           <RestaurantCard resData={resLists[4]}/>
           <RestaurantCard resData={resLists[5]}/>  */}
           
          </div>
 
       </div>
    )
 }
 export default Body;