import React from "react";

function Button({children, onSubmit})  {
  return(
  	<div>
		<button type="button" className="btn btn-primary" onClick={onSubmit} value={children}>
			{children}
		</button>
  	</div>
  )
}

export default Button;