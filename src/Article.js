import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
class Article extends Component {
	state = {
		visible: false, // определили начальное состояние
	}
	handleReadMoreClck = (e) => { // добавили метод
		e.preventDefault()
		this.setState({ visible: !this.state.visible })
	}
	render() {
		const { author, text, bigText } = this.props
		const { visible } = this.state // вытащили visible из this.state
		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<Typography variant="overline" gutterBottom>
					<p className="news__text">{text}</p>
				</Typography>
				<a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Скрыть/показать</a>
				<Typography variant="subtitle1" gutterBottom>
					{ /* если visible, то показывай */
						visible && <p className='news__big-text'>{bigText}</p>
					}
				</Typography>
			</div>
		)
	}
}
Article.propTypes = {
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	bigText: PropTypes.string.isRequired
}

export default Article;
