import { useState } from "react";
import { IMG } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantCategory=({data})=>{
    // console.log(data);
  const [showItem,setShowItem]=useState(false);
  const dispatch=useDispatch();
  const handleAddItem=()=>{
    dispatch(addItem({data}))
  };
    return (
         <div className="w-6/12 mx-auto my-6 p-4 bg-gray-100 shadow-lg">
            <div className="flex justify-between bg-gray-200 py-4 px-2 align-middle cursor-pointer" onClick={()=>{
                  showItem ? setShowItem(false) : setShowItem(true)
            }}>
            <span className="font-bold text-xl ">{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</span> 
            <span className="mx-3 ">⬇️</span>
            </div>
             
           
            {showItem && data?.card?.card?.itemCards.map(list=>
            <div key={list?.card?.info?.id} className=" my-3 text-left  border-black flex justify-between" >
           <div className="border-b-2  w-10/12 border-gray-400 shadow-lg">
          <h2 className="font-bold">{list?.card?.info?.name}</h2>
          <h4> ₹{list?.card?.info?.price? list?.card?.info?.price/100 :list?.card?.info?.defaultPrice/100}</h4>
           <p className=" text-xs">{list?.card?.info?.description}</p> 
       </div>
       
       <div className="  h-32 w-32">
        <button onClick={()=>{
    dispatch(addItem({list}))
  }} className=" p-1 absolute ml-9 mt-[6rem] rounded-lg bg-black text-white "> 
        Add  +
         </button>
       <div>
        <img className="h-32 w-32" src={IMG +list?.card?.info?.imageId } alt="" />
       </div>
       </div>
        </div>)}
            
            

         </div>
    )
}
export default RestaurantCategory;