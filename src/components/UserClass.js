import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserInfo:{
                name:"Dummy Name",
                location:"dummy Location",
                avatar_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpinnacle.works%2Fdummy-image%2F&psig=AOvVaw2LJUW3KK3G8ke0nMJEuxTT&ust=1693468959795000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCRo871g4EDFQAAAAAdAAAAABAE"

            }
        };
                                                                    //   console.log(this.props.name+ " constructor");
    }

   async componentDidMount(){

          const data= await fetch("https://api.github.com/users/mohitkumar1718");
          const json=await data.json();
          this.setState({
            UserInfo:json,
          }
          )   
          console.log(json);                                                       
    }
    // it is called when the dom is updated or after the component Did Mount 
   componentDidUpdate(){
    console.log("updated Dom");
   }
   // it is called when the component is unmount or when we change the page or when we change the route
   componentWillUnmount(){
    console.log("component will unmount is called");
   }
    render()
    {
       const {name,location,avatar_url}=this.state.UserInfo;
        return( 
            // destructor on the fly
            <div className="userCard">
               <img src={avatar_url} alt="non" />
               <h2>Name: {name}</h2>
               <h3>Location : {location}</h3>
               <h3>contact: @mohitkumar1718</h3>
               
               
            </div>
        );
    }
}
export default UserClass;


/***
 * 
 *-
 ---- ---Mounting----------
       - constructor is called with dummy data
       - Render is called with dummy data
         - HTML is loaded with dummy data
       - component Did Mount is called
         -API call
         -this.setState  updated the state variable
        
----------update-------
       - Render is called with API data
       - HTML is loaded with updated data
       - component Did update is called
 */


       /***
        * in functional component we use return in useEffect just like componentDidUNmount it behaves the same for functional component 
        * 
        * 
        * 
        */