import React from "react";
import ReactDOM from "react-dom/client";

 // react component
 // class based component
 // functional component

// JSX heading
const jsxHeading = <h1 className="heading" tabIndex="5">this is jsx heading</h1>;
console.log(jsxHeading);
 
// const heading = React.createElement("h1", { id: "heading" }, "this is react");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// functional component
const Heading=()=>(

    // React fragment -- behave like an empty tag
    <React.Fragment>
    <div>
     <h1>this is functional component</h1>
     </div>
     <div>
        <h1>this is second line</h1>
     </div>
     </React.Fragment>
);
root.render(<Heading/>);
