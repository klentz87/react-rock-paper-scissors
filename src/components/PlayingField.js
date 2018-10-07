import React, { Component } from "react";

class PlayingField extends Component {
	render() {					
		return (
			<div>
				{this.props.computerPick}
				{this.props.winner}
				{this.props.playerPick}
			</div>
		)
	}
}

export default PlayingField;