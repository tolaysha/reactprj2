import React, { Component} from 'react';
import PropTypes from 'prop-types'; // ES6
class Article extends Component {
	render() {
		const { author, text } = this.props
		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<p className="news__text">{text}</p>
			</div>
		)
	}
}
Article.propTypes = {
		author: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
}

export default Article;
