import { useDispatch, useSelector } from "react-redux";
import { IMG } from "../utils/constant";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cardItem=useSelector((store)=>store.cart.items);
    console.log(cardItem);
    const dispatch =useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    };
    return(
        <div>
        <div className=" text-center ml-11 ">
         <h1 className="font-bold text-2xl">Cart </h1>

        <button onClick={()=>{
            handleClear();
        }} className="p-2 m-2 rounded-lg bg-black text-white" >Clear cart</button>
        </div>
        <div className="w-6/12 mx-auto my-6 p-4 bg-gray-100 shadow-lg">
        {cardItem.length==0? <h1 className=" font-bold text-center">Card is empty Add items to card</h1>: cardItem.map(lists=>
            <div key={lists?.list?.card?.info?.id} className=" my-3 text-left  border-black flex justify-between" >
           <div className="border-b-2  w-10/12 border-gray-400 shadow-lg">
          <h2 className="font-bold">{lists?.list?.card?.info?.name}</h2>
          <h4> ₹{lists?.list?.card?.info?.price? lists?.list?.card?.info?.price/100 :lists?.list?.card?.info?.defaultPrice/100}</h4>
           <p className=" text-xs">{lists?.list?.card?.info?.description}</p> 
       </div>
       
       <div className="  h-32 w-32">
        <button className=" p-1 absolute ml-9 mt-[6rem] rounded-lg bg-black text-white "> 
        Add  +
         </button>
       <div>
        <img className="h-32 w-32" src={IMG +lists?.list?.card?.info?.imageId } alt="" />
       </div>
       </div>
        </div>)}
        </div>
        </div>
        
    );
};
export default Cart;