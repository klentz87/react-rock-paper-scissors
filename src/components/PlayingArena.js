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
			count: 1, // app counts down "1,2,3" before throwing picks
			displayCount: false, // whether to display the countdown, or which picks have been chosen
			buttonActive: true,
			finalWinner: ""
		}

		this.handleComputerChoice = this.handleComputerChoice.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.startGame = this.startGame.bind(this);
		this.countDown = this.countDown.bind(this);
		this.throwPicks = this.throwPicks.bind(this);
		this.updateScoreboard = this.updateScoreboard.bind(this);
		this.determineFinalWinner = this.determineFinalWinner.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleComputerChoice() {
		return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)];
	}

  	handleClick(event) {
  		const choice = event.target.value;

  		this.setState({
  			displayCount: true,
  			buttonActive: false
  		}, this.startGame(choice))
  	};

  	startGame(event) {
    	this.timerID = setInterval(() => this.countDown(event), 400);
  	}

  	countDown(event) {
  	    if (this.state.count < 3) { 
        	this.setState((prevState, props) => ({ count: prevState.count + 1 })) 
		} else  {		
			clearInterval(this.timerID);
    		this.setState({	displayCount: false,
    						count: 1 }, 
    						() => {this.throwPicks(event)}
    		)				
		 this.determineFinalWinner() // is calling a function after setting state okay?
	  	}
  	}

	throwPicks(event) {
		const playerPick = event;
		const computerPick = this.handleComputerChoice();
		const winner = determineWinner(playerPick, computerPick);

		this.setState({
			computerChoice: computerPick,
			playerChoice: playerPick,
			winner: winner
		}, () => this.updateScoreboard(winner))
	}

	determineFinalWinner() {
		let score = {...this.state.score};

		if (score.playerWins === 5 || score.computerWins === 5) {
			if (score.playerWins > score.computerWins) {
				this.setState({
					finalWinner: "Player",
					buttonActive: false
				});
			} else {
				this.setState({
					finalWinner: "Computer",
					buttonActive: false
				})
			}
		} else {
			this.setState({
				buttonActive: true
			})
			
		}
	}

	handleReset() {
		this.setState({
			score: { 
				playerWins: 0,
				computerWins: 0
			},
			buttonActive: true,
			winner: "",
			finalWinner: "",
			computerChoice: "",
			playerChoice: "",		
		})
	}

	updateScoreboard(winner) {
		let score = this.state.score;

		if (winner === "Player") {
			this.setState(prevState => {
				score.playerWins = prevState.score.playerWins + 1;
				return score;
			});
		} else if (winner === "Computer") {
			this.setState((prevState) => {
				score.computerWins = prevState.score.computerWins + 1;
				return score;			
			});
		} // use prevState, props for this?
			

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
						finalWinner={this.state.finalWinner}
						onReset={this.handleReset}
					/>
					<Scoreboard score={this.state.score} />
				</div>	
			</div>
		)
	}
}

export default PlayingArena;