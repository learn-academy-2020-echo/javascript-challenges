import './App.css';

class  App() extends Component {
  constructor(props){
    super(props)
    this.state= {
      roll: [1, 2, 3, 4, 5, 6]

    }
}

  render(){
    return (
      <div className="App">
      <Dice name={this.state.roll}
      </div> ) }
}

export default App;
