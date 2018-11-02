import React, { Component } from "react";
import "../css/Scoreboard.css";
import PropTypes from "prop-types";

class Scoreboard extends Component {
	render() {
		return (

			<div className="scoreboard d-flex half-circle ">
				<ul className="list-unstyled mt-3">
					<li className="text-center mx-3">
						<h3>Player</h3>
						<h4>{this.props.score.playerWins}</h4>
					</li>
					<li className="text-center mx-3">
						<h3>Computer</h3>
						<h4>{this.props.score.computerWins}</h4>
					</li>
				</ul>
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