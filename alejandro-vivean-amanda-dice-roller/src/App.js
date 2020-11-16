import React, { Component, Fragment } from 'react'
import DiceRoll from './components/DiceRoll'
import RollLog from './components/RollLog'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rollLog: [],
			currentRoll: '',
			rollValues: [1, 2, 3, 4, 5, 6],
		}
	}

	diceRollClick = (e) => {
		let { rollValues, rollLog } = this.state
		let randomValue = Math.floor(Math.random() * rollValues.length)
		let newRoll = rollValues[randomValue]
		// push to rollLog array
		rollLog.push(newRoll)
		this.setState({ currentRoll: newRoll, rollLog: rollLog })
	}

	render() {
		return (
			<Fragment>
				<h1>Dice Roller</h1>
				<DiceRoll
					roll={this.diceRollClick}
					currentRoll={this.state.currentRoll}
				/>
				<RollLog rollLog={this.state.rollLog} />
			</Fragment>
		)
	}
}

export default App
