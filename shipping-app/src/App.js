import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Page1 from './container/Page1';

class App extends Component {
	state = {
		buttonTitle: null,
	};

	constructor(props) {
		super(props);

		this.state = { buttonTitle: 'here' };
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
					<p>
						Press <button>{this.state.buttonTitle}</button>.
					</p>
				</header>
			</div>
		);
	}
}

export default App;
