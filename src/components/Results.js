import React, { Component } from "react";
import Button from "./Button";
import "../css/App.css";
import "../css/PlayingField.css";
import PropTypes from "prop-types"

class Results extends Component {
	render() {					
		let winnerDisplay, computerDisplay, playerDisplay;

		if (this.props.finalWinner) {
			computerDisplay = <h3>Computer picks {this.props.computerPick}</h3>;
			playerDisplay = <h3>Player picks {this.props.playerPick}</h3>;
			winnerDisplay = (
				<div>
					<h1>{this.props.finalWinner} Wins Best of 5!</h1>
					<h2>Play again?</h2>
					<Button onSubmit={this.props.onSubmit} buttonActive={this.props.buttonActive}>
						Reset
					</Button>
				</div>
			)
		} else {	
			if (this.props.winner) {
				computerDisplay = <h3>Computer picks {this.props.computerPick}</h3>;
				playerDisplay = <h3>Player picks {this.props.playerPick}</h3>;
				if (this.props.winner === "Draw!") {
					winnerDisplay = <h1>{this.props.winner}</h1>
				} else {
					winnerDisplay = <h1>{this.props.winner} wins!</h1>
				}
			} 
		};
		

		return (
			<div className="d-flex justify-content-between field-display"> {/* see App.css for relevant styling */}
					<div className="player-display d-flex align-items-center justify-content-center p-3">
						{playerDisplay}
					</div>
					<div className="center-display d-flex align-items-center">
						{winnerDisplay}
					</div>
					<div className="computer-display d-flex align-items-center justify-content-center p-3">
						{computerDisplay}
					</div>
			</div>
		)
	}
}

Results.propTypes = {
	computerPick: PropTypes.string,
	playerPick: PropTypes.string,
	winner: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	buttonActive: PropTypes.bool.isRequired
}

export default Results;