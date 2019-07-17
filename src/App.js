import React from 'react';
import './App.css';
import News from './Accordeon.js';
import PrimarySearchAppBar from './Navbar.js';
const App = () => {
	return (
		<React.Fragment>
			<PrimarySearchAppBar />
			<h3>Новости</h3>
			<News />
		</React.Fragment>
	)
}
export default App;
