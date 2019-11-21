import { BrowserRouter } from 'react-router-dom';
import React, { Component } from "react";
import App from "./router/Article.js";
class Router extends Component {
	render(){
		return (
			<BrowserRouter>
				<App />
		  	</BrowserRouter>
		)
	}
}
export default Router;