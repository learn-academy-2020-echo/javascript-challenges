import React, { Component } from 'react'
import Content from './Components/Content'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';


class App extends Component {
  render(){
    return(
      <div className="App">
        <h1> Header Test :) </h1>
        < Content / >
          < Header / >
            < Footer / > 
      </div>
    )
  }
}

export default App;
