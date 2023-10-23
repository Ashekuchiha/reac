import React, { Component } from 'react'

export default class QUS extends Component {
  render() {
    return (
      <div>
        <p>are you log in ?</p>
          <button onClick={this.yes}>yes</button>
          <button onClick={this.no}>no</button>
      </div>
    )
  }
}
