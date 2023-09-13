import { useSelector } from "react-redux";

const Cart=()=>{
    const cardItem=useSelector((store)=>store.cart.items);
    console.log(cardItem);
    return(
        <div>
        <div className=" text-center ml-11 ">
         <h1 className="font-bold text-2xl">Cart inf </h1>
        </div>
        <div>
        { cardItem.map(lists=>
            <div key={lists?.list?.card?.info?.id} className=" my-3 text-left  border-black flex justify-between" >
           <div className="border-b-2  w-10/12 border-gray-400 shadow-lg">
          <h2 className="font-bold">{lits?.list?.card?.info?.name}</h2>
          <h4> ₹{lists?.list?.card?.info?.price? list?.card?.info?.price/100 :lists?.list?.card?.info?.defaultPrice/100}</h4>
           <p className=" text-xs">{lists?.list?.card?.info?.description}</p> 
       </div>
       
       <div className="  h-32 w-32">
        <button className=" p-1 absolute ml-9 mt-[6rem] rounded-lg bg-black text-white "> 
        Add  +
         </button>
       <div>
        <img className="h-32 w-32" src={IMG +lits?.list?.card?.info?.imageId } alt="" />
       </div>
       </div>
        </div>)}
        </div>
        </div>
        
    );
};
export default Cart;