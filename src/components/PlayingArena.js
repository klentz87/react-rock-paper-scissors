import React, { Component } from "react";
import PlayingField from "./PlayingField";
import Scoreboard from "./Scoreboard";
import Title from "./Title"

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
			displayCount: false,
			count: 1,
			buttonActive: true
		}

		this.handlePlayerChoice = this.handlePlayerChoice.bind(this);
		this.handleComputerChoice = this.handleComputerChoice.bind(this);
		this.throwPicks = this.throwPicks.bind(this);
		this.updateScoreboard = this.updateScoreboard.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.tick = this.tick.bind(this);
		this.click = this.click.bind(this);
		this.hideCountdown = this.hideCountdown.bind(this);
		this.enableButton = this.enableButton.bind(this);
	}

	handleComputerChoice() {
		return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)]
	}

	handlePlayerChoice(event) {
		return event
	}

  	startTimer(event) {
  		let choice = event.target.value
    	this.timerID = setInterval(() => this.tick(choice), 400);
  	}

  	click(event) {
  		this.setState({
  			displayCount: true,
  			buttonActive: false
  		});
  		this.startTimer(event)
  	}

  	hideCountdown() {
  		this.setState({ displayCount: false,
  					   count: 1 })
  	}

	enableButton() {
		this.setState({ buttonActive: true })
	}

	disableButton() {
		this.setState({ buttonActive: false })
	}

  	tick(event) {
  	    if (this.state.count < 3) { 
        	this.setState((prevState, props) => ({ count: prevState.count + 1 })) 
		} else  {		
			clearInterval(this.timerID);
    		this.hideCountdown();
			this.throwPicks(event);
			this.enableButton();
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

/*
		if (winner === "Player") {
			this.setState((prevState, props) => ({
	    		score.playerWins: prevState.score.playerWins + 1
			})); 
		} else if (winner === "Computer") {
			this.setState((prevState, props) => ({
				score.computerWins: prevState.score.computerWins + 1
			}));
		}
*/		
	}

	render() {
		return (
			<div>
				<Title />
				<div className="container-fluid row">
					<PlayingField 
						playerPick={this.state.playerChoice} 
						computerPick={this.state.computerChoice} 
						winner={this.state.winner} 
						countdown={this.state.count}
						onPlayerChoice={this.click} 
						displayCount={this.state.displayCount} 
						buttonActive={this.state.buttonActive}

					/>
					<Scoreboard score={this.state.score} />
				</div>	
			</div>
		)
	}
}

export default PlayingArena;