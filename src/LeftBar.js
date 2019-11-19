import React, { Component } from "react";
class LeftBar extends Component {
	state = {
		menuItems:[
			{
				id:1,
				name:'First'
			},
			{
				id:2,
				name:'Second'
			},
			{
				id:3,
				name:'Thierd'
			}
		]

		
	}
	render(){
		return (
			<div id="leftbar">
				<ul>
				{this.state.menuItems.map(item => <li id={item.id}>{item.name}</li>)}
				</ul>
			
			</div>
		)
	}
}
export default LeftBar;