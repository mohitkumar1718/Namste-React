import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header=()=>{
  const [btnReact, setbtnReact]=useState("Login");
    return(
       <div className="header">
            <div className="logo-container">
             <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
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