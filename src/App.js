import React, { Component, Fragment } from 'react';
import './App.css';
import News from './News.js';
import SimpleAppBar from './Navbar.js';


const myNews = [
	{
		id: 1, // добавили id
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа.'
	},
	{
		id: 2,
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
	},
	{
		id: 3,
		author: 'Max Frontend',
		text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
	},
	{
		id: 4,
		author: 'Гость',
		text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
	}
];


const App = () => {
	return (
		<React.Fragment>
			{SimpleAppBar()}
			<h3>Новости</h3>
			<News />
		</React.Fragment>
	)
}

export default App;
