import React, { Component, Fragment } from "react";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "white",
		};
	}

	render() {
		return (
			<Fragment>
				<button>Buttons</button>
			</Fragment>
		);
	}
}
export default ColorBox;
