import React, { Component } from 'react';
class TestInput extends Component {
	constructor(props) {
		super(props)
		this.input = React.createRef()
	}

	onBtnClickHandler = (e) => {
		alert(this.input.current.value)
	}
	render() {
		return (
			<div>
				<input className="test-input"
					defaultValue="введите значение"
					onChange={this.onChangeHandler}
					ref={this.input} />
				<button onClick={this.onBtnClickHandler}>123123</button>
			</div>
		)
	}
}
export default TestInput;