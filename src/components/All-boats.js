import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const AllBoats = () => {

	const url = "http://localhost:3000";
	// console.log("url", url);

	// async function test() {
	// 	console.log("inuti test funktionen")
	// 	await fetch("http://localhost:3000/boats", { method: "GET" })
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// }

	async function test() {
		await axios.get('/boats')
			.then((response) => { console.log(response) })
			.catch((error) => { console.log("Error", error) })
	}
	test();


	// function test() {
	// 	console.log("inuti test funktionen, precis innan fetch");
	// 	fetch("http://localhost:3000/boats", { method: "GET" })
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// };

	//Varför funkar det inte att skriva detta i fetch?

	// function test() {
	// 	console.log("inuti test funktionen, precis innan fetch");
	// 	fetch(`${url} /boats `, { method: "GET" })
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))

	// };


	return (
		<div>
			<h1>Alla båtar:</h1>
			<br></br>
			<div>
				<button>Klicka mig</button>
			</div>
			<br></br>
			<Link to="/"><li>Back to Home</li></Link>
		</div>
	)
}


