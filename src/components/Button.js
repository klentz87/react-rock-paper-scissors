import React from "react";
import "../css/Button.css";
import PropTypes from "prop-types"

function Button({children, onSubmit, buttonActive})  {
  return(
  	<div>
		<button type="button" className="btn btn-primary" onClick={onSubmit} disabled={buttonActive} value={children}>
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