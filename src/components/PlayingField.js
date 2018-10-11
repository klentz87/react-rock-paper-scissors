import React, { Component } from "react";
import Countdown from "./Countdown";
import Results from "./Results";
import PlayerControls from "./PlayerControls";
import PropTypes from "prop-types";

class PlayingField extends Component {
	render() {
		return(
			<div className="col-md-8 mt-5 text-center">
				{this.props.displayCount ? 
					<Countdown countdown={this.props.countdown}/> :
					<Results 
						playerPick={this.props.playerPick} 
						computerPick={this.props.computerPick} 
						winner={this.props.winner} 
					/>}
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
	winner: PropTypes.string
}

export default PlayingField