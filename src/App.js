import React from "react";
import "./App.css";
import News from "./newsList.js";
import AddInput from "./AddInput.js";
import PrimarySearchAppBar from "./Navbar.js";
import Clock from "./Clock.js";
import LeftBar from "./LeftBar.js";
class App extends React.Component {
	state = {
	  news: [], // в начальное состояние положили значение из переменной
	}
  
	render() {
		return (
			<React.Fragment>
				<PrimarySearchAppBar />
				<LeftBar />
				<Clock />
				<h3>Новости</h3>
				<AddInput />
				<News />
			</React.Fragment>
		)
	}
  }
  export default App;