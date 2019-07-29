import React, { Component, Fragment } from 'react';
import Article from './Article.js';
class NewsList extends Component {

	state = {
		newsList: [
			{
				id: 1,
				author: 'Саша Печкин',
				text: 'В четверг, четвертого числа...',
				bigText: 'В четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
			},
			{
				id: 2,
				author: 'Просто Вася',
				text: 'Считаю, что $ должен стоить 35 рублей!',
				bigText: 'А евро 42!'
			},
			{
				id: 3,
				author: 'Max Frontend',
				text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
				bigText: 'А евро опять выше 70.'
			},
			{
				id: 4,
				author: 'Гость',
				text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
				bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
			}
		],
		counter : 4
}

	handleAllClck = (e) => { // добавили метод
		e.preventDefault()
		this.setState({ counter: ++this.state.counter })
	}

	render() {
		const { newsList } = this.state
		const { counter } = this.state
		return (
			<div className="news" onClick={this.handleAllClck}>
				{newsList.length ?
					< Fragment >
						{newsList.map(item => <Article key={item.id} text={item.text} author={item.author} bigText={item.bigText} />)}
						<strong className={'news__count'}>Всего новостей: {newsList.length}</strong>
					</Fragment>
					: <p>К сожалению новостей нет</p>}
					<p>All click =  {counter}</p>
			</div>
		);
	}
}
export default NewsList;