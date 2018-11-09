import React, { Component } from "react";
import Countdown from "./Countdown";
import Results from "./Results";
import PlayerControls from "./PlayerControls";
import PropTypes from "prop-types";
import { Container } from "mdbreact";

class PlayingField extends Component {
	render() {
		return(
			<div className="playing-field justify-content-center col-md-8 col-xs-12 text-center px-0">
				<Container className="playing-results mb-2 px-0">
					{this.props.displayCount ? 
						<Countdown countdown={this.props.countdown}/> :
					<Results 
						playerPick={this.props.playerPick} 
						computerPick={this.props.computerPick} 
						winner={this.props.winner} 
						finalWinner={this.props.finalWinner}
						// the following is used for the button that will appear when a final winner is determined
						onSubmit={this.props.onReset}
						buttonActive={this.props.buttonActive}
					/>}
				</Container>	
					<PlayerControls onPlayerChoice={this.props.onPlayerChoice} buttonActive={this.props.buttonActive}/>
			</div>	
		)
	}
}

PlayingField.propTypes = {
	displayCount: PropTypes.bool.isRequired,
	countdown: PropTypes.number,
	playerPick: PropTypes.string,
	computerPick: PropTypes.string,
	winner: PropTypes.string,
	finalWinner: PropTypes.string
}

export default PlayingField