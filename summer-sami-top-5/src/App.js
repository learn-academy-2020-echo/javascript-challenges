import './App.css';
import React, { Component } from 'react'
import Header from "./Components/Header"
import Content from "./Components/Content"
import CheesecakeFactory from "./Components/CheesecakeFactory"
import PhoHut from "./Components/PhoHut"
import TacoStand from "./Components/TacoStand"
import ElCacho from "./Components/ElCacho"
import RaisingCanes from "./Components/RaisingCanes"

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Content />
        <CheesecakeFactory />
        <PhoHut />
        <TacoStand />
        <ElCacho />
        <RaisingCanes />
      </div>
    );
  }
}
export default App;
