import React, {Component} from "react";
import "../css/App.css";
import "../css/Countdown.css";
import PropTypes from "prop-types"


class Countdown extends Component {
/*
	componentDidMount() {
		alert("Countdown mounted!")
	}

	componentWillUnmount() {
		alert("Countdown unmounted!")
	}
*/

 	render() {
    	return (
      		<div className="d-flex align-items-center justify-content-center field-display">
        		<h1>{this.props.countdown}</h1>
      		</div>
   		);
  	}
}

Countdown.propTypes = {
	countdown: PropTypes.number
}

export default Countdown