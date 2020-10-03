import React, { useState } from 'react';
import axios from 'axios';

export const Remove = () => {
	const [boats, setBoats] = useState([]);
	async function getBoats() {
		const response = await axios.get('/boats')
			.then((response) => {
				setBoats(response.data);
			})
			.catch((error) => { console.log("Error", error) });
		console.log("Värdet av boats", boats)
	}
	function remove(id) {
		fetch("/boat/" + id, { method: "DELETE" })
		console.log("Värdet av id i remove funktionen", id)
	}
	return (
		<div>
			<h1>Ta bort en båt:</h1>
			<div className="wrapper">
				{boats.map((boat) => (
					<div key={boat._id}>
						<h2>{boat.name}</h2><br></br>
						Pris: {boat.price} :-<br></br>
						Tillverkningsår: {boat.year}<br></br>
						Motor: {boat.motor}<br></br>
						Segel: {boat.sail}<br></br><br></br>
						<button onClick={() => remove(boat._id)}>Ta bort</button>
						<br></br>
					</div>
				))}
			</div>
			<br></br>
			<div>
				<button className="removeBoat" onClick={getBoats}>Visa båtar</button>
			</div>
			<br></br>
		</div>
	)
}


