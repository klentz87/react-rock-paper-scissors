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
		this.startGame = this.startGame.bind(this);
		this.countDown = this.countDown.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.hideCountdown = this.hideCountdown.bind(this);
		this.enableButton = this.enableButton.bind(this);
	}

	handleComputerChoice() {
		return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)];
	}

	handlePlayerChoice(event) {
		return event;
	}

  	handleClick(event) {
  		this.setState({
  			displayCount: true,
  			buttonActive: false
  		});
  		this.startGame(event);
  	}

  	startGame(event) {
  		const choice = event.target.value;
    	this.timerID = setInterval(() => this.countDown(choice), 400);
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

  	countDown(event) {
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
		const playerPick = this.handlePlayerChoice(event);
		const computerPick = this.handleComputerChoice();
		const winner = determineWinner(playerPick, computerPick);

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
						onPlayerChoice={this.handleClick} 
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