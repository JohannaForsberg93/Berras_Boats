import React, { useState } from 'react';
import axios from 'axios';

export const AllBoats = () => {
	const [boats, setBoats] = useState([]);

	async function getBoats() {
		const response = await axios.get('/boats')
			.then((response) => {
				setBoats(response.data);
			})
			.catch((error) => { console.log("Error", error) });
		console.log("Värdet av boats", boats)
	}
	console.log("Värdet av boats", boats)
	return (
		<div>
			<h1>Alla båtar:</h1>
			<br></br>
			<div className="wrapper">
				{boats.map((boat) => (
					<div key={boat._id}>
						<h2>{boat.name}</h2><br></br>
						Pris: {boat.price} :-<br></br>
						Tillverkningsår: {boat.year}<br></br>
						Motor: {boat.motor}<br></br>
						Segel: {boat.sail}<br></br>
					</div>
				))}
			</div>
			<div>
				<button onClick={getBoats}>Hämta båtar</button>
			</div>
			<br></br>
		</div>
	)
}