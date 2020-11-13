import React, { Component } from 'react'


class Squaretest extends Component {
  constructor(props){
     super(props)
       this.state = {
         colorArray: ["white","green", "blue", "yellow", "red", "purple", "orange"],
        color : "white"
     }
   }

colorChanger = () => {
    
    let count = Math.floor(Math.random() * Math.floor(7));
    let newColor = this.state.colorArray
    let finalColor = newColor[count]

    return this.setState({ color: finalColor })

    // if(count === 0){
    //     this.setState({ color: newColor[0] })
    // }else if(count === 1){
    //     this.setState({ color: newColor[1] })
    // }else if(count === 2){
    //     this.setState({ color: newColor[2] })
    // }else if(count === 3){
    //     this.setState({ color: newColor[3] })
    // }else if(count === 4){
    //     this.setState({ color: newColor[4] })
    // }else if(count === 5){
    //     this.setState({ color: newColor[5] })
    // }else if(count === 6){
    //     this.setState({ color: newColor[6] })
    // }else{
    //     this.setState({ color: newColor[7] })
    // }
}


//     for (let i = 0; newColor < newColor.length; i++) {
//         if (newColor[i] === "orange"){
//             this.setState({ color: newColor[0] })
//         }else {
//             this.setState({ color: newColor[i] })
//         }
//         return newColor[1]
//   }

  render(){

    let { color } = this.state

    return (
      //specifying the class to equal the current color state
      <div className = { color }>
      {/* //on the click, run the function that will loop through the colors and add one to the color's index
      //display the name as the corresponding color name value */}
      <button onClick = {this.colorChanger}> { color }
      </button>
      </div>
    );
  }
}
export default Squaretest;
