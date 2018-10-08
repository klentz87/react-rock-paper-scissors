import React, { Component } from "react";
import PlayerControls from "./PlayerControls";
import PlayingField from "./PlayingField";
import Scoreboard from "./Scoreboard";
import Countdown from "./Countdown";

const determineWinner = require("../utils/determineWinner.js").determineWinner;

class PlayingArena extends Component {
	constructor() {
		super();
		
		this.state = {
			playerChoice: "",
			computerChoice: "",
			winner: "",
			score: {
					playerWins: 0,
					computerWins: 0
				   },
			displayCount: true,
			count: 0	
		}

		this.handlePlayerChoice = this.handlePlayerChoice.bind(this);
		this.handleComputerChoice = this.handleComputerChoice.bind(this);
		this.throwPicks = this.throwPicks.bind(this);
		this.updateScoreboard = this.updateScoreboard.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.tick = this.tick.bind(this);
	}

	handleComputerChoice() {
		return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)]
	}


	handlePlayerChoice(event) {
		return event
	}

  	startTimer(event) {
  		let choice = event.target.value
    	this.timerID = setInterval(() => this.tick(choice), 1000);

    	this.setState({
     		displayCount: false
   		});
  	}
  
  	stopTimer() {
    	clearInterval(this.timerID);
    	this.setState({
      		displayCount: true,
      		count: 0
      	});
  	}

  	tick(event) {
  	    if (this.state.count < 3) { 
        	this.setState((prevState, props) => ({ count: prevState.count + 1 })) 
		} else  {		
			clearInterval(this.timerID)	
			this.throwPicks(event);
	  	}
  	}


	throwPicks(event) {
		var playerPick = this.handlePlayerChoice(event);
		var computerPick = this.handleComputerChoice();
		var winner = determineWinner(playerPick, computerPick);

		this.setState({
			computerChoice: computerPick,
			playerChoice: playerPick,
			winner: winner
		});

		this.updateScoreboard(winner);
	}

	updateScoreboard(winner) {
		let score = {...this.state.score};

		
		if (winner === "Player") {
			score.playerWins = this.state.score.playerWins + 1
			this.setState({score})
		} else if (winner === "Computer") {
			score.computerWins = this.state.score.computerWins + 1
			this.setState({score})
		}

// fix below so it works
/*
		if (winner === "Player") {
			this.setState((prevState, props) => ({
	    		playerWins: prevState.score.playerWins + 1
			})); 
		} else if (winner === "Computer") {
			this.setState((prevState, props) => ({
				computerWins: prevState.score.computerWins + 1
			}));
		}
*/		
	}

	render() {
		return (
			<div>
				<Countdown countdown={this.state.count}/>
				<PlayingField playerPick={this.state.playerChoice} computerPick={this.state.computerChoice} winner={this.state.winner} />
				<PlayerControls onPlayerChoice={this.startTimer}/>
				<Scoreboard score={this.state.score} />
			</div>
		)
	}
}

export default PlayingArena;