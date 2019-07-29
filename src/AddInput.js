import React, { Component } from "react";
class AddInput extends Component {
	constructor(props) {
		super(props)
		this.input = React.createRef()
	}
	state = {
		Author: "",
		NewsText: "",
		formAgree: true
	}

	onBtnClickHandler = (e) => {
		alert(this.input.current.value)
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
			<form className='add'>
				<input
					type='text'
					className='add__author'
					placeholder={Author}
					onChange={this.handleNameChange }
					value={Author}/>
				<textarea
					className='add__text'
					onChange={this.handleTextChange }
					placeholder={NewsText}
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
			</form>
		)
	}
}
export default AddInput;

