import React, { Component } from "react";
import "../css/Scoreboard.css";
import PropTypes from "prop-types";

class Scoreboard extends Component {
	render() {
		return (

			<div className="d-flex justify-content-center ">
				<div className="scoreboard d-flex col-lg-8 justify-content-around px-0 py-3 mb-0">
					<div className="text-center">
						<h3 className="header">Player</h3>
						<h4>{this.props.score.playerWins}</h4>
					</div>
					<div className="center-display text-center">
						<h2 className="header">ROUND</h2>
						<h3>{this.props.score.round}</h3>
					</div>
					<div className="text-center">
						<h3 className="header">Computer</h3>
						<h4>{this.props.score.computerWins}</h4>
					</div>
				</div>
			</div>
		)
	}
}

Scoreboard.propTypes = {
	score: PropTypes.object,
	computerWins: PropTypes.string,
	playerWins: PropTypes.string,
	winner: PropTypes.string,
}

export default Scoreboard;