import React, { Component } from 'react';
import PlayingArena from "./PlayingArena";
import "../css/App.css"

class App extends Component {
  	render() {
    	return (
      		<div className="app">
      			<PlayingArena />
      		</div>
    	);
  	}
}

export default App;
