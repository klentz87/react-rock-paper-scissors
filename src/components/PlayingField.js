import React, { Component } from "react";
import Countdown from "./Countdown";
import Results from "./Results";
import PlayerControls from "./PlayerControls";

class PlayingField extends Component {
	render() {
		return(
			<div className="playing-field">
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

export default PlayingField