import React,{useState} from "react";
import "./SantaCalc.css";


const SantaCalc = () =>{

	let [People,setPeople] = useState(["Yuls", "Tols","Yegor","Nastya"]);



	return (
		<div id="SantaDiv">
			<input
				type='text'
				className='add__author'
				placeholder="Input value"
				//onChange={this.handleNameChange }
				value={12}/>
			<button
				className='add__btn'
				//onClick={this.onBtnClickHandler}
				//</div>disabled={!formAgree}
				>
				Добавить
			</button>
		</div>
	)
}
export default SantaCalc;