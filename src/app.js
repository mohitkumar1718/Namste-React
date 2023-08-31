import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"));

/**
 * -header
 *   -logo
 *   -Navbar
 * -body
 *  -search bar 
 *  -Restaurant container
 *    - Restaurant card
 * -Footer
 *   - copyrights
 *   - Links
 *   - Contacts
 */


  
 


 const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         <Outlet/>
      </div>
   )
 }



const AppRoute=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children: [
         {
            path:"/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurant/:resID",
            element:<RestaurantMenu/>
         },
         {
            path:"/Grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
         }
      ]

   },
   
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>);
