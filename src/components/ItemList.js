const ItemList=({list})=>{
    console.log(list);
    return (
        <div className="mx-4 my-3">
       {list.map(list=><div className=" my-3 text-left  border-black" >
       <div>
        <h2>{list?.card?.info?.name}</h2>
        <h4>{list?.card?.info?.price}</h4>
        <p>{list?.card?.info?.description}</p>
        
       </div>
        
        
        </div>)}
        
  
        </div>
    )
}
export default ItemList;