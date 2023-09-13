import { useEffect, useState } from "react";

const Userfun=()=>{
   const [GitApi,setGitApi]=useState([]);
   useEffect(()=>{
    fetchData();
   },[]);
   const fetchData=async()=>{
    const data=await fetch("https://api.github.com/users/mohitkumar1718");
    const json= await data.json();
   setGitApi(json);
   console.log(json);
   console.log(GitApi);
   }
    const {avatar_url,name}=GitApi;
    
    return(
        <div className="flex justify-between m-7 p-6  ">
        <div>
           <h1 className="text-5xl font-extrabold"> {name}</h1>
           <h2 className="text-3xl font-semibold" >Location : Faridabad</h2>
           <h2 className="text-3xl font-semibold" >contact: @mohitkumar1718</h2>
           </div>
        <div className="">
           <img src={avatar_url} alt="" />
           </div>
           
        
           
        </div>
    )
} 
export default Userfun;