function determineWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return "Draw!"
	} else {
		if (playerChoice === "Rock") {
			if (computerChoice === "Paper") {
				return "Computer"
			} else {
				return "Player"
			}
		} else if (playerChoice === "Scissors") {
			if (computerChoice === "Paper") {
				return "Player"
			} else {
				return "Computer"
			}
		} else /* Paper */ {
			if (computerChoice === "Scissors") {
				return "Computer"
			} else {
				return "Player"
			}
		}
	}
}

exports.determineWinner = determineWinner;

/*
console.log("you pick: Rock , computer picks: Rock, " + determineWinner("Rock", "Rock"))
console.log("you pick: Rock, computer picks:  Paper, " + determineWinner("Rock", "Paper"))
console.log("you pick: Rock, computer picks:  Scissors, " + determineWinner("Rock", "Scissors"))
console.log("you pick: Scissors, computer picks: Rock, " + determineWinner("Scissors", "Rock"))
console.log("you pick: Scissors, computer picks: Paper, " + determineWinner("Scissors", "Paper"))
console.log("you pick: Scissors, computer picks: Scissors, " + determineWinner("Scissors", "Scissors"))
console.log("you pick: Paper, computer picks: Rock, " + determineWinner("Paper", "Rock"))
console.log("you pick: Paper, computer picks: Paper, " + determineWinner("Paper", "Paper"))
console.log("you pick: Paper, computer picks: Scissors, " + determineWinner("Paper", "Scissors"))
*/