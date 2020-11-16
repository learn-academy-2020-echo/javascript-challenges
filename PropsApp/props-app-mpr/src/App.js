import React, { Component } from 'react'
import Dice from './Components/Dice'
import Rolls from './Components/Rolls'
import './App.css';


class  App extends Component {
  constructor(props){
    super(props)
    this.state= {
      dice: [1, 2, 3, 4, 5, 6] ,
      roll: 0 ,
      diceRoll: []
    }
}

  diceRoll = (input) => {
    //when declaring variables in react
  }

  render(){
    return (
      <div>
      <Dice diceroll={this.state.dice}/ >
      </div>
    )
  }
}


export default App;
