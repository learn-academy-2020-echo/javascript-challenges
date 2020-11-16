import React, {Component} from 'react'
import Dice from './Components/Dice'
import Roll from './Components/Roll'

class App extends Component {
  constructor(props){
  super(props)
    this.state={
      array:[1,2,3,4,5,6]
    }
  }

  diceRoll = () => {
    let newArr = this.state.array
    let randomNum = Math.floor(Math.random()*Math.floor(6))
    return newArr[randomNum]
  } 


  render (){
  return (

    <div>
    < Dice />
    < Roll />
    </div>
  );
  }
}
export default App;
