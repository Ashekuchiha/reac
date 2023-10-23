import React, { Component } from 'react'

export default class STATE extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Number:0,
    }
  }
  add=()=>{
    this.setState({
      Number:this.state.Number+1,
    })
  }
  sub=()=>{
    this.setState({
      Number:this.state.Number-1,
    })
  }
  render() {
    const {Number}=this.state;
    return (
      <div>
        <h1>number :{Number}</h1>
        <button onClick={this.add} disabled={Number===5 ?true:false}>+</button>
        <button onClick={this.sub} disabled={Number===-5 ?true:false}>-</button>
      </div>
    )
  }
}
