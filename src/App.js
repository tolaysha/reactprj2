import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./PageContent/NewsPage/Navbar.js";
import LeftBar from "./LeftBar.js";
import NewsPage from "./pages/NewsPage.js";
import SantaPage from "./pages/SantaPage.js";
class App extends React.Component {
	state = {
	  news: [], // в начальное состояние положили значение из переменной
	}
  
	render() {
		return (
			<BrowserRouter>
				<PrimarySearchAppBar />
				<LeftBar />
				<Route path='/news' component={NewsPage}/>
				<Route path='/santa' component={SantaPage}/>
			</BrowserRouter>
		)
	}
  }
  export default App;