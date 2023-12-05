import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import {useSelector} from "react-redux";
const Header=()=>{
  const onlineStatus=useOnlineStatus();
  const [btnReact, setbtnReact]=useState("Login");
  const {loginUser}=useContext(userContext);
  // Subscribing to the store using a selector 
  const cartItems=useSelector((store)=>store.cart.items)
// drhdzn
    return(
   
       <div className="flex justify-between bg-indigo-300 shadow-lg  ">
            <div className=" w-36">
             <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
              <ul className="flex p-4 m-4">
                <li className=" px-4">ONLINE STATUS : {onlineStatus? "🟢": "🔴"}</li>
                <li className=" px-4"><Link to="/">HOME </Link></li>
                <li className=" px-4"><Link to="/About">ABOUT ME</Link></li>
                <li className=" px-4"><Link to="/contact">CONTACT ME</Link></li>
                <li className=" px-4"><Link to="/cart">CART ({cartItems.length}) </Link></li>
                {/* <li className=" px-4"> <Link to="/Grocery">Grocery</Link></li> */}
                <button className="" onClick={()=>{
                  btnReact==="Login"? setbtnReact("Logout"): setbtnReact("Login");
                }}>{btnReact}</button>
                {/* <li className=" px-4"> {loginUser}</li> */}
              </ul>
            </div>
 
       </div>
    )
  }
  export default Header;