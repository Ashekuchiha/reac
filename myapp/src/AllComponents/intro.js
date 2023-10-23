//class component

 import React,{Component} from "react";

 class Card2 extends Component{

    render(){
        return(<div>
            <h2>class component</h2>
            <h3>card 2</h3>
            <p>{this.props.name}</p>{/*passing valu in class component */}
        </div>
        )

    }

    
 }
 export default Card2;