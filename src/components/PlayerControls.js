import React, { Component } from "react";
import Button from "./Button";
import "../css/App.css";
import "../css/PlayerControls.css";

class PlayerControls extends Component {
	render() {

//		const clickHandler = this.props.displayCount ? null : this.props.onPlayerChoice

		return (
			<div className="btn-group button-row">	
				<Button buttonActive={!this.props.buttonActive} onSubmit={this.props.onPlayerChoice}>Rock</Button>
				<Button buttonActive={!this.props.buttonActive} onSubmit={this.props.onPlayerChoice}>Paper</Button>
				<Button buttonActive={!this.props.buttonActive} onSubmit={this.props.onPlayerChoice}>Scissors</Button>
			</div>
		)
	}
}

export default PlayerControls;