import React, { Component } from "react";
import "../css/Scoreboard.css";
import PropTypes from "prop-types";

class Scoreboard extends Component {
	render() {
		return (
			<div className="scoreboard">
				<div className="player-score">
					<h3>
						Player Wins
					</h3>
					<h4>
						 {this.props.score.playerWins}
					</h4>
				</div>	
				<div className="computer-score">	
					<h3>
						Computer Wins
					</h3>
					<h4>	
						 {this.props.score.computerWins}
					</h4>
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