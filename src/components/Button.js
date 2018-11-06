import React from "react";
import "../css/Button.css";
import PropTypes from "prop-types"

function Button({value, children, onSubmit, buttonActive})  {
  return(
  	<div>
		<button type="button" className="btn btn-circle btn-xl btn-primary mx-4" onClick={onSubmit} disabled={buttonActive} id={value}>
			{children}
		</button>
  	</div>
  )
}

Button.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	buttonActive: PropTypes.bool.isRequired
}

export default Button;