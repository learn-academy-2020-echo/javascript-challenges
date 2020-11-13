// Build a function that randomly selects css colors
// Then, we have to built another function that changes the color of the box 
// We'll have an array of strings of colors that need to match the actual color of the box when it changes colors
// [ColorName: pink, colorBox: pink.css]



import React, {Component} from 'react'

constructor(props){
    super(props)
    this.state = {
        count: 0,
    }
}
   addOne = () => {
       this.setState({
           count: this.state.count 
       })
   }
    render()
{
        return(
         <div> 
        <p className= "box"> Count: (this.state.count) </p> 
         </div>   
        )
    }
}


export default Box