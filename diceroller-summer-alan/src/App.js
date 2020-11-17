import './App.css';
import React, { Component } from 'react'
import Dice from './components/Dice'


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        possibleRollNums:[1, 2, 3, 4, 5, 6],
        currentNumber: "",
        rollLog: []
      }
  }

  rollTheDice =() => {
    // destructure possibleRollNums & rollLog from this.state
    let { possibleRollNums, rollLog} = this.state
    // set a variable for the random value that you get when rolling the dice
    let randomValue = Math.floor(Math.random() * possibleRollNums.length)
    //on each roll, look at the possible values in the array and give us a new random value
    let newRoll = possibleRollNums[randomValue]
    //this new random value will get pushed to the roll log.
    rollLog.push(newRoll)
    this.setState ({ currentNumber: newRoll, rollLog: rollLog })
  }

//needed to create props to be able to share these variables "uptheriver" from components to app.js
  render(){
    return (
      <div>
        <Dice
          roll = {this.rollTheDice}
          currentNumber = {this.state.currentNumber}
          />

      </div>
    );
  }
}

export default App;
