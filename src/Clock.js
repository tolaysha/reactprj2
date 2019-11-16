import React, { Component } from "react";
class Clock extends Component {
	state = {
		data: new Date().toLocaleTimeString()
	}
	tick(){
		debugger
		this.setState({data: new Date().toLocaleTimeString()})
	}
	componentDidMount(){
		debugger
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