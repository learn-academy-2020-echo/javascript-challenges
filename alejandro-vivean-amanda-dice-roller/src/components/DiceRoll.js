import React, { Component } from 'react'

class DiceRoll extends Component {
	render() {
		// destructure props

		return (
			<div>
				<button
					style={{
						width: '200px',
						height: '200px',
						fontSize: '50px',
					}}
					onClick={this.props.roll}
				>
					{this.props.currentRoll}
				</button>
				<h2>Click Box to Roll</h2>
			</div>
		)
	}
}

export default DiceRoll
