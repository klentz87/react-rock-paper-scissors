import React, { Component } from "react";
import Button from "./Button"

class PlayerControls extends Component {
	render() {
		return (
			<div>	
				<Button onSubmit={this.props.onPlayerChoice}>Rock</Button>
				<Button onSubmit={this.props.onPlayerChoice}>Paper</Button>
				<Button onSubmit={this.props.onPlayerChoice}>Scissors</Button>
			</div>
		)
	}
}

export default PlayerControls;