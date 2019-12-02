import React,{useState} from "react";
import "./SantaCalc.css";


const SantaCalc = () =>{

	let [People,setPeople] = useState(["Yuls", "Tols","Yegor","Nastya"]);

	const buttonClick = () => {
		alert(2);
	}


	return (
		<div id="SantaDiv">
			<input
				type='text'
				className='add__author'
				placeholder="Input value"
				onChange={console.log(2) }
				defaultValue={12}/>
			<a  className='button'
				onClick={buttonClick}
				href
				//</div>disabled={!formAgree}
				>
					<svg className="button__svg">
						<rect className="button__rect"></rect>
					</svg>
				Добавить
			</a>
		</div>
	)
}
export default SantaCalc;