import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
  const onlineStatus=useOnlineStatus();
  const [btnReact, setbtnReact]=useState("Login");
    return(
       <div className="header">
            <div className="logo-container">
             <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
              <ul>
                <li>Online Status : {onlineStatus? "🟢": "🔴"}</li>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT Us</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
                <li>CART</li>
                <button className="login-btn" onClick={()=>{
                  btnReact==="Login"? setbtnReact("Logout"): setbtnReact("Login");
                }}>{btnReact}</button>
              </ul>
            </div>
 
       </div>
    )
  }
  export default Header;