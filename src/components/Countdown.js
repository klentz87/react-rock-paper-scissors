import React, {Component} from "react";

class Countdown extends Component {
	constructor(props) {
		super();

		this.state = {
			display: true,
			count: 0
		}		
/*	
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.tick = this.tick.bind(this);
*/
	}

/*
  	startTimer() {
    	this.timerID = setInterval(() => this.tick(), 1000);
    	this.setState({
     		display: false
   		});
  	}
  
  	stopTimer() {
    	clearInterval(this.timerID);
    	this.setState({
      		display: true,
      	});
  	}

  	tick() {
        if (this.state.count >= 3) {
        	clearInterval(this.timerID)
        }
    	this.setState((prevState, props) => ({
          	count: prevState.count + 1       
        }));		
  	}
*/  
/*  
  	componentWillUnmount() {
   		this.stopTimer();
 	}
*/

 	render() {
 		const display = this.state.display;
    	return (
      		<div>
        		<h1>{this.props.countdown}</h1>
        		<button onClick={!display ? this.stopTimer : this.startTimer}>{display ? "Start" : "Pause"}</button>
      		</div>
   		);
  	}
}

export default Countdown