import React, {Component} from "react";
import "../css/App.css";
import "../css/Countdown.css";

class Countdown extends Component {
 	render() {
    	return (
      		<div className="field-display">
        		<h1>{this.props.countdown}</h1>
      		</div>
   		);
  	}
}

export default Countdown