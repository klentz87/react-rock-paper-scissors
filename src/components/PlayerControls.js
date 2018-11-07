import React, { Component } from "react";
import Button from "./Button";
import "../css/App.css";
import "../css/PlayerControls.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";

class PlayerControls extends Component {
	render() {

//		const clickHandler = this.props.displayCount ? null : this.props.onPlayerChoice

		return (
			<div className="btn-group button-row mt-3">	
				<Button buttonActive={!this.props.buttonActive} onSubmit={this.props.onPlayerChoice} value="Rock"><FontAwesomeIcon className="icon" icon={faHandRock} /></Button>
				<Button buttonActive={!this.props.buttonActive} onSubmit={this.props.onPlayerChoice} value="Paper"><FontAwesomeIcon className="icon" icon={faHandPaper} /></Button>
				<Button buttonActive={!this.props.buttonActive} onSubmit={this.props.onPlayerChoice} value="Scissors"><FontAwesomeIcon className="icon" icon={faHandScissors} /></Button>
			</div>
		)
	}
}

PlayerControls.propTypes = {
	buttonActive: PropTypes.bool.isRequired,
	onPlayerChoice: PropTypes.func.isRequired
}

export default PlayerControls;