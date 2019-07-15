import React from 'react';
//import logo from './logo.svg';
import './App.css';

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
  },
  {
    id: 5,
    author: 'Юлия',
    text: 'Толя любит кушать'
  }
];
class Article extends React.Component {
  render() {
    const { author, text } = this.props.data
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
      </div>
    )
  }
}
class News extends React.Component {
  renderNews = () => {
    const data  = this.props.data
    let newsTemplate = null

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item}/>
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return newsTemplate
  }
  render() {
    const data  = this.props.data

    return (
      <div className="news">
        {this.renderNews()}
        {
          data.length ? <strong className={'news__count'}>Всего новостей: {data.length}</strong> : null
        }
      </div>
    );
  }
}

const App = () => {
  return (
    <React.Fragment>
      <h3>Новости</h3>
      <News data={myNews}/>
    </React.Fragment>
  )
}

export default App;
