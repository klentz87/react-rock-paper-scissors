import React, { Component } from "react";
import "../css/Scoreboard.css"

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

export default Scoreboard;