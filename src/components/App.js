import React from 'react';
import './App.css';
import Header from './Header';
import CardGastos from './CardGastos/CardGastos'

function App() {
	return (
		<div className="container">
			<Header/>
			<CardGastos/>
		</div>
	);
}

export default App;
