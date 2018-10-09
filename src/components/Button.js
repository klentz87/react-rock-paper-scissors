import React from "react";
import "../css/Button.css";

function Button({children, onSubmit, buttonActive})  {
  return(
  	<div>
		<button type="button" className="btn btn-primary" onClick={onSubmit} disabled={buttonActive} value={children}>
			{children}
		</button>
  	</div>
  )
}

export default Button;