import React, { Component } from 'react'

class Dice extends Component{
  render() {
    return(
      <div>
      { Math.floor(Math.random() * {this.props.diceroll} ) }
      <button onClick={this.props.roll}>
      click me!!!
      </button>
      </div>
    )
  }
}

export default Dice
