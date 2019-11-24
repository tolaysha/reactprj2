import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
class AddInput extends Component {
	constructor(props) {
		super(props)
		this.input = 1
	}
	state = {
		Author: "",
		NewsText: "",
		formAgree: true
	}

	onBtnClickHandler = (e) => {
		debugger
		console.log(this.input)
	}
	componentDidMount() {
		// ставим фокус в input
		
	}
	handleNameChange  = (e) =>{
		this.setState({ Author: e.target.value })
	}
	handleTextChange  = (e) =>{
		this.setState({ NewsText: e.target.value })
	}
	handleCheckBoxChange = (e) => {
		this.setState({ formAgree: e.currentTarget.checked })
	}
	render() {
		const { Author , NewsText , formAgree } = this.state
		return (
			<div className='add'>
				<input
					type='text'
					className='add__author'
					placeholder="Input value"
					onChange={this.handleNameChange }
					value={Author}/>
				<textarea
					className='add__text'
					onChange={this.handleTextChange }
					placeholder="Input value"
					value={NewsText}>
				</textarea>
				<label className='add__checkrule'	>
					<input type='checkbox'
						checked={formAgree}
						onChange = {this.handleCheckBoxChange}/> Я согласен с правилами
        		</label>
				<button
					className='add__btn'
					onClick={this.onBtnClickHandler}
					disabled={!formAgree}>
					Добавить
        		</button>
			</div>
		)
	}
}

// AddInput.propTypes = {
// 	Author: PropTypes.string.isRequired,
// 	NewsText: PropTypes.string.isRequired,
// 	formAgree: PropTypes.bool.isRequired
// }
export default AddInput;

