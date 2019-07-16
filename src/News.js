import React, { Component, Fragment } from 'react';
import Article from './Article.js';

// const myNews = [
// 	{
// 	  id: 1, // добавили id
// 	  author: 'Саша Печкин',
// 	  text: 'В четверг, четвертого числа.'
// 	},
// 	{
// 	  id: 2,
// 	  author: 'Просто Вася',
// 	  text: 'Считаю, что $ должен стоить 35 рублей!'
// 	},
// 	{
// 	  id: 3,
// 	  author: 'Max Frontend',
// 	  text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
// 	},
// 	{
// 	  id: 4,
// 	  author: 'Гость',
// 	  text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
// 	}
//   ];

class NewsList extends Component {

	state = {
		newsList: [
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
		]
	}


	renderNews = () => {
		const { newsList } = this.state
		let newsTemplate = null
		if (newsList.length) {
			newsTemplate = newsList.map(item => <Article key={item.id} text={item.text} author={item.author} />)
		} else {
			newsTemplate = <p>К сожалению новостей нет</p>
		}

		return newsTemplate
	}

	render() {
		const { newsList } = this.state
		return (
			<div className="news">
				{this.renderNews()}
				{
					newsList.length && <strong className={'news__count'}>Всего новостей: {newsList.length}</strong>
				}
			</div>
		);
	}
}
export default NewsList;