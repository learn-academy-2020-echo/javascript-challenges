import React, { Component } from 'react'

class Dice extends Component{

  diceRoll = () => {
    let rollDice = (Math.floor(Math.random() * {this.props.diceNumbers.length})
    return
  }
  render() {
    return(
      <div>

    //  { Math.floor(Math.random() * {this.props.dice} ) }
      <button onClick={this.diceRoll}>


      </button>
      <h1> Click me for a dice roll! </h1>
      </div>
    )
  }
}

export default Dice
