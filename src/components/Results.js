import React, { Component } from "react";
import "../css/App.css"
import "../css/PlayingField.css";
import PropTypes from "prop-types"

class Results extends Component {
	render() {					
		let winnerDisplay;

		if (this.props.winner) {
			if (this.props.winner === "Draw!") {
				winnerDisplay = <h1 className="my-4">{this.props.winner}</h1>
			} else {
				winnerDisplay = <h1 className="my-4">{this.props.winner} wins!</h1>
			}
		} 

		return (
			<div className="d-flex flex-column align-items-center justify-content-center field-display"> {/* see App.css for relevant styling */}
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

Results.propTypes = {
	computerPick: PropTypes.string,
	playerPick: PropTypes.string,
	winner: PropTypes.string,
}

export default Results;