import ItemList from "./Itemlist";

const RestaurantCategory=({data})=>{
    console.log(data);
    return (
         <div className="w-6/12 mx-auto my-4 p-4   bg-gray-100 shadow-lg ">
            <div className="flex justify-between">
            <span className="font-bold mx-3 ">{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</span> 
            <span className="mx-3 ">⬇️</span>
            
            </div>
            <ItemList list={data?.card?.card?.itemCards}/>

         </div>
    )
}
export default RestaurantCategory;