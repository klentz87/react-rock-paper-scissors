import React, {Component} from "react";
import "../css/App.css";
import "../css/PlayingField.css";
import PropTypes from "prop-types";

class Countdown extends Component {
 	render() {
    	return (
      		<div className="d-flex justify-content-between field-display">
				<div className="computer-display d-flex align-items-center">
        			&nbsp;
        		</div> 
        		<div className="d-flex align-items-center center-display ">
        			<h1>{this.props.countdown}</h1>
      			</div>
				<div className="player-display d-flex align-items-center">
      				&nbsp;
      			</div>
      		</div>
   		);
  	}
}

Countdown.propTypes = {
	countdown: PropTypes.number
}

export default Countdown