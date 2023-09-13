import Userfun from "./Userfun";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
  
    render(){
        // console.log("parent render");
        return (
            <div>
            <Userfun name={"MOHIT KUMArr"}/>
            
        
            </div>
        )
    }
}

/*
-parent constructor
-parent render
 -1 constructor
 -1 render

 -2 constructor
 -2 render

 -- <<DOM UPDATE>> IN SINGLE BATCH
 
 -1 Did Mount
 -2-Did Mount

-Parent Did Mount

*/

export default About;