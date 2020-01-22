import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps';

function App() {
	return (
		<div className="App">
			<Toggle
				render={({ on, toggle }) => (
					<div>
						{on && <h1>Show Me</h1>}
						<button onClick={toggle}> Show/Hide</button>
					</div>
				)}
			/>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
