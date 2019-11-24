import React, { Component } from "react";
class Clock extends Component {
	state = {
		data: new Date().toLocaleTimeString()
	}
	tick(){
		this.setState()
		this.setState((state) => ({data: new Date().toLocaleTimeString()}));
	}
	componentDidMount(){
		setInterval(()=>this.tick(), 1000)
	}
	render(){
		return (
			<React.Fragment>
				<div className="Data">
					Now {this.state.data} 
				</div>
			</React.Fragment> 
		)
	}
}
export default Clock;