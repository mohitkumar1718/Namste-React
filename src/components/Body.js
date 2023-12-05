import RestaurantCard, { RestaurantLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import InfiniteScroll from 'react-infinite-scroll-component'
const Body=()=>{
   const [ListOfRestaurants ,setListOfRestaurant]=useState([]);
   const [list,setList]=useState(ListOfRestaurants);
   const[searchText,setSearchText]=useState([]);
   const RestaurantcardLable=RestaurantLabel(RestaurantCard);
  //  const{loginUser,setUserName}=useContext(userContext);
   
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5211086&lng=77.2410541&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
   
      setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }
  const status=useOnlineStatus();
   if(status===false)return <h1>You are offline</h1>;
   
   const fetchMoreData= async()=>{
    const data2 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5211086&lng=77.2410541&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json2 = await data2.json();
      setListOfRestaurant(ListOfRestaurants.concat( json2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
      setList(list+json2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(json2);
   
    // 
   }
   
    return (ListOfRestaurants.length===0)? (<Shimmer/>): (
      
       <div className="body bg-indigo-100 ">
       
          <div className="flex ">
          <div className="m-4 p-4 mx-auto">
            {/* search logic */}
            <input className=" border border-solid border-black border-2 rounded-md p-1" type="text" placeholder="Search" name="" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
            <button className="px-4 py-1 bg-indigo-300 mx-3 rounded-md"
            onClick={()=>{
              
               const filterRestaurant=list.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
               setListOfRestaurant(filterRestaurant);
            }}>Search</button>
            <button className="px-4 py-1 bg-indigo-300 mx-3 rounded-md tex " onClick={()=>{
            //   filter logic for rating above 2
              let filterList=ListOfRestaurants.filter((res)=>res?.info?.avgRating>4);
               setListOfRestaurant(filterList);
            
             }}>Top Rated Restaurant</button>
             {/* <label >UserName : </label>
             <input className=" border border-solid border-black border-2 rounded-md" value={loginUser} onChange={(e)=>setUserName(e.target.value)}  /> */}
         </div>
             
          </div>
          <InfiniteScroll
          dataLength={ListOfRestaurants.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h1>Loading...</h1>}
        >
          <div className="flex flex-wrap   justify-center  ">
          
        

           {ListOfRestaurants.map((restaurant)=> (
             <Link key={restaurant.info?.id} to={"/restaurant/"+restaurant.info?.id}>
             {restaurant.info.promoted ?(<RestaurantcardLable resData={restaurant}/>) :(<RestaurantCard  resData={restaurant}/>) }
             </Link>
 
           ))}
          
            {/* <RestaurantCard resData={resLists[0]}/> */}
          </div>
            </InfiniteScroll>
           
 
       </div>
    )
 }
 export default Body;




