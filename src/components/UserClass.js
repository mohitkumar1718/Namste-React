import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
        };
        console.log(this.props.name+ " constructor");
    }

    componentDidMount(){
        console.log(this.props.name+ "Did mount");
    }
    render()
    {
        console.log(this.props.name+ " render");

        return(                      
            <div className="userCard">
               <h1>count: {this.state.count}</h1>
               <button onClick={()=>{
                this.setState({
                    count:this.state.count+ 1,
                })
               }
               }>Count Increase</button>
               <h1>count2: {this.state.count2}</h1>
               <h2>Name: {this.props.name}</h2>
               <h3>Location : Faridabad</h3>
               <h3>contact: @mohitkumar1718</h3>
               
               
            </div>
        );
    }
}
export default UserClass;