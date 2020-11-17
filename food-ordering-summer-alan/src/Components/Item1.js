import React, { Component } from 'react'


class Item1 extends Component {
  constructor(props){
     super(props)
     }
   }

  foodItems = () => {
    return this.props.items.dish
  }

  render(){
    return (
      <div>
      <button onClick = {this.foodItems[0]}> { this.props.dish }
      </button>
      </div>
    );
  }
}
export default Item1;
