import React, { Component, Fragment } from 'react';
class Article extends React.Component {
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
export default Article;
