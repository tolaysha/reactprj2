import React, { useState } from "react";
import {NavLink} from "react-router-dom";
const LeftBar =() => {
	let [menuItems , usemenuItems ] = React.useState([
		{
			id:1,
			name:"First",
			to:"news"
		},
		{
			id:2,
			name:"Second",
			to:"css"
		},
		{
			id:3,
			name:"Thierd",
			to: "react"
		},
		{
			id:3,
			name:"Setting",
			to: "setting"
		}
	]) 
	return (
		<div id="leftbar">
			<ul>
				{menuItems.map(item => <NavLink to={item.to}><li key={item.id}>{item.name}</li></NavLink>)}
			</ul>
		
		</div>
	)
	
}
export default LeftBar;