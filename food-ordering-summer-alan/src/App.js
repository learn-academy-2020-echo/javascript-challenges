import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      //an object with food items and their corresponding prices
      items: [
        {dish: "burger", price: 10},
        {dish: "french fries", price: 3},
        {dish: "ramen", price: 11}
    }
  }
// //create a function that will display only the food items that have been selected
// //every food item should be its own button
// renderFoodItems = () => {
//   let selectedItems =
//   // if the item is selected by the user, return the dish name and price
//   //return only the items that the user selected
//  return `${this.state.items.dish}, ${this.state.items.price}`
//  }
  selectFoodItems = () =>

  render(){
  return (
    <div className= "App">
      <Item1 />

    </div>
  );
}
  }

export default App;
