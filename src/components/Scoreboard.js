import React, { Component } from "react";

class Scoreboard extends Component {
	render() {
		return (
			<div>
				<p>
					Player Wins: {this.props.score.playerWins}
				</p>
				<p>
					Computer Wins: {this.props.score.computerWins}
				</p>	
			</div>
		)
	}
}

export default Scoreboard;