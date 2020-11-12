import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Content from './Components/Content'
import Btab from './Components/Btab'
import Footer from './Components/Footer'
class App extends Component {
  render (){
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Btab/>
      <Footer/>
    </div>
    );
  }
}

export default App;
