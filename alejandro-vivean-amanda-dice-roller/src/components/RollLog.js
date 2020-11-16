import React, { Component } from 'react'

class RollLog extends Component {
	render() {
		// destructure props
		let { rollLog } = this.props
		// new variable to hold mapped props from dicelog
		let eachRoll = rollLog.map((roll) => {
			return <p>{roll}</p>
		})

		return (
			<div>
				<h1>Roll Log Component</h1>
				{eachRoll}
			</div>
		)
	}
}

export default RollLog
