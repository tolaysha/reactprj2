import React from "react";
import "./App.css";
import News from "./newsList.js";
import AddInput from "./AddInput.js";
import PrimarySearchAppBar from "./Navbar.js";
const App = () => {
	return (
		<React.Fragment>
			<PrimarySearchAppBar />
			<h3>Новости</h3>
			<AddInput />
			<News />
		</React.Fragment>
	)
}
export default App;
