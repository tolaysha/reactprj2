import React from "react";
import "../App.css";
import News from "../PageContent/NewsPage/newsList.js";
import AddInput from "../PageContent/NewsPage/AddInput.js";
import Clock from "../PageContent/NewsPage/Clock.js";
class NewsPage extends React.Component {
	state = {
	  news: [], // в начальное состояние положили значение из переменной
	}
  
	render() {
		return (
			<React.Fragment>
				<Clock />
				<h3>Новости</h3>
				<AddInput />
				<News />
			</React.Fragment>
		)
	}
  }
  export default NewsPage;