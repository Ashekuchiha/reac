import React, { Component } from 'react'

import HOME from './HOME'
import SINGIN from './SINGIN'
import QUS from './QUS'

export default class CALLCONDITION extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       x:'',
    }
  }
  
  yes=()=>{
    this.setState({
      x:true,
    })
  }
  no=()=>{
    this.setState({
      x:false,
    })
  }
  render() {
    const {x}=this.state;
    return (
        <div>
            {x===true ? <HOME/>:<SINGIN/>}
             {/* {x&&<HOME/>} */}
             if (x==true) {
              <HOME/>
             } elseif(x==false) {
              <SINGIN/>
             }else{
              <QUS/>
             }
        </div>
    )
  }
}
