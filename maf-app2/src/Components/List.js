import React, { Component } from 'react'
import Breakingbad from './Components/Breakingbad'

class List extends Component{
    render(){
      return (
        <React.Fragment>
        <ol>  
        <li>Breaking Bad</li>
        <li>Avatar</li>
        <li>Full Metal Alchemist</li>
        <li>Mac Giver</li>
        <li>The Big Bang Theory</li>
        
        <Breakingbad/>
        </ol>
        </React.Fragment>
      )

    }
  }
  
  export default List
  