import React, { Component } from 'react'


class Fooditems extends Component {
    
    
  assignMenu = () => {
    this.props.foodChose(this.props.value)
  }
    
    render(){
    return (
      <div> 
      <h1>Choose { this.props.value }</h1>
      <button OnClick = {this.assignMenu}>  </button>
      </div> 
    )
    }
}
  
  
  export default Fooditems;