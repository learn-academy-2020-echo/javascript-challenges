import React, { Component } from 'react'
import Fooditems from './Components/Fooditems'
import './App.css';





class  App extends Component {
  constructor(props){
  super(props)
    this.state = {
    food: ["pizza 15", "ice cream 5" , "burrito 8", "soup 7", "coffee 3" ],
    }
    }
  

    foodChose = (food) => {
      this.setState({ currentColor: food })
    }


  render(){
    let menu = this.state.food.map((value, index) => {
      return(
      <Fooditems
      value={ value }
      key={ index }
      />
      )
    }
    )
  return (
    <div> 
    
    {menu}
    </div>
  );
}
}


export default App;
