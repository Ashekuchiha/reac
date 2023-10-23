import React, { Component } from 'react'

export default class TASK1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         contents:'',
      }
    }
    text=(e)=>{
        this.setState({
            contents:e.target.value,
        },()=>{
            console.log(this.state.contents)//just for consol screan
        })
    }


  render() {
     const {contents}=this.state;
    return (
      <div>
        <input type='text' onChange={this.text}></input>
        <p>{contents}</p>
      </div>
    )
  }
}
