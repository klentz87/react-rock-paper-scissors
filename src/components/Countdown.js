import React, {Component} from "react";
import "../css/App.css";
import "../css/Countdown.css";

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
  	componentDidMount(event) {
    	this.timerID = setInterval(() => this.props.tick(event), 1000);
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
*/    

/*
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
    	return (
      		<div className="playing-field">
        		<h1>{this.props.countdown}</h1>
      		</div>
   		);
  	}
}

export default Countdown