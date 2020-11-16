import React, { Component } from 'react'

class Dice extends Component{
  render() {
    return(
      <div>
      { Math.random(this.props.name) }
      <button onClick={this.props.roll}>
      click me!!!
      </button>
      </div>
    )
  }
}

export default Dice
