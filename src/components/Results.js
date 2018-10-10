import React, { Component } from "react";
import "../css/App.css"
import "../css/PlayingField.css";

class Results extends Component {
	render() {					
		let winnerDisplay;

		if (this.props.winner) {
			if (this.props.winner === "Draw!") {
				winnerDisplay = <h1>{this.props.winner}</h1>
			} else {
				winnerDisplay = <h1>{this.props.winner} wins!</h1>
			}
		} 

		return (
			<div className="field-display"> {/* see App.css for relevant styling */}
				<h2>
					{this.props.computerPick}
				</h2>
					{winnerDisplay}
				<h2>
					{this.props.playerPick}
				</h2>
			</div>
		)
	}
}

export default Results;