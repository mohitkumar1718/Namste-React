import { useState } from "react";

const Userfun=()=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return(
        <div className="userCard">
           <h1>count: {count}</h1>
           <h1>count2: {count2}</h1>
           <h2>Name: Mohit Kumar</h2>
           <h3>Location : Faridabad</h3>
           <h3>contact: @mohitkumar1718</h3>
           <h4>jlnnlenj</h4>
           
        </div>
    )
} 
export default Userfun;