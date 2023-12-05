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
        <div className=" bg-indigo-300 flex justify-between m-7 p-6 lg:max-w-screen-xl mx-auto ">
        
        <div className="">
           <img className="rounded-xl " src={avatar_url} alt="" />
           </div>
        <div className="w-5/12">
           <h1 className="text-5xl font-extrabold mb-6"> {name}</h1>
           <h2 >As 3rd year student pursuing a Bachelor's degree in Computer Engineering, I am passionate about the intersection of technology and innovation. With a strong foundation in Data Structures and Algorithms, I possess the analytical skills and problem-solving ability to tackle complex coding challenges.
            <br /><br />
           In addition, I am currently expanding my skillset by learning React.js, a powerful front-end library used in building dynamic and responsive user interfaces. I have also completed courses in HTML, CSS and JavaScript, and I am learning react and am adept at creating web applications that are both visually appealing and functional.
           <br /><br />
           My dedication to learning and my ability to adapt to new technologies make me a valuable asset to any team. I am constantly seeking opportunities to expand my knowledge and collaborate with like-minded individuals to develop cutting-edge solutions.
           <br /><br />
           I am excited to leverage my skills and experience to contribute to the technology industry and make a positive impact on society.</h2>
           
           </div>   
        </div>
    )
} 
export default Userfun;