import { MENU_API } from "./constant";
import { useState,useEffect } from "react";
const useRestaurantMenu=(resID)=>{
    const [ResInfo,SetResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
     },[]);
     const fetchData= async ()=>{
        const data= await fetch(MENU_API+resID);
        const json= await data.json();
        // console.log(json);
        SetResInfo(json.data);
    };
    return ResInfo; 
};
export default useRestaurantMenu;