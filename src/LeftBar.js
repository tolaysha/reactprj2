import React, { Component } from "react";
import {NavLink} from "react-router-dom";
class LeftBar extends Component {
	state = {
		menuItems:[
			{
				id:1,
				name:'First',
				to:'news'
			},
			{
				id:2,
				name:'Second',
				to:'css'
			},
			{
				id:3,
				name:'Thierd',
				to: 'react'
			}
		]

		
	}
	render(){
		return (
			<div id="leftbar">
				<ul>
				{this.state.menuItems.map(item => <NavLink to={item.to}><li key={item.id}>{item.name}</li></NavLink>)}
				</ul>
			
			</div>
		)
	}
}
export default LeftBar;