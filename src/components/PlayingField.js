import React, { Component } from "react";
import "../css/PlayingField.css"

class PlayingField extends Component {
	render() {					
		return (
			<div className="playing-field">
				<div>
					{this.props.computerPick}
				</div>
				<div>
					{this.props.winner}
				</div>
				<div>
					{this.props.playerPick}
				</div>
			</div>
		)
	}
}

export default PlayingField;