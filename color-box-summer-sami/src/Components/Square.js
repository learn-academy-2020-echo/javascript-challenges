import React, { Component } from 'react'



class Square extends Component {
  constructor(props){
     super(props)
       this.state = {
         color: ["white","green", "blue", "yellow", "red", "purple", "orange"]
     }
   }

colorChanger = () => {
  // //make a variable that defines the colors that the white box will change to
  //   let arrayOfColors = ["white","green", "blue", "yellow", "red", "purple", "orange"]
    //write a function that cycles through the array of colors and starts back at 0 if you reach the end of the array
    for(i=0; i<this.state.color.length; i++){
      // start with the less broad condition
      //we want it to set the state back to index 0 when color index is 6
      if(this.state.color.indexOf() == 6){
        this.setState({this.state.color[0]})
      }else{
        //return a value from the array that is the next color in the sequence
        //set the state of the box to equal this new color
        return this.setState({color: this.state.color[i + 1]})
      }
    }
  }

  render(){
    return (
      //specifying the class to equal the current color state
      <div className = {this.state.color}>
      //on the click, run the function that will loop through the colors and add one to the color's index
      //display the name as the corresponding color name value
      <button onClick = {this.colorChanger}> {this.state.color}
      </button>
      </div>
    );
  }
}
export default Square;
