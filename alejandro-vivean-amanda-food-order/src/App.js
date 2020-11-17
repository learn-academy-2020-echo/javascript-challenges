import React, {Component}from 'react';
import Menu from './components/Menu'
import Order from './components/Order'

import './App.css';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      menu: [],
      total: 0,
      order: []
    }
  }

  render(){

  return (
    <div className="App">
      <h1> App </h1>
      <Menu />
      <Order />
    </div>
  );
  }
}

export default App;
