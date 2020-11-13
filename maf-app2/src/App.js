import React, { Component } from 'react'
import Header from './Components/Header'
import List from './Components/List'
import Breakingbad from './Components/Breakingbad'
import './App.css';


class App extends Component{
  render(){
    return (
      <React.Fragment>
      <h1>A Basic Class Component</h1>
      <Header/>
      
      <List/>

      </React.Fragment>
    )
  }
}

export default App

