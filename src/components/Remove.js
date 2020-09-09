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
		fetch("/boat/:id" + id, { method: "DELETE" })
		console.log("Värdet av id i remove funktionen", id)
	}
	return (
		<div>
			<h1>Ta bort en båt:</h1>
			<div>
				{boats.map((boat) => (
					<div key={boat._id}>
						<h2>{boat.name}</h2>
						<h4>Pris: {boat.price}</h4>
						<button onClick={() => remove(boat._id)}>Ta bort</button>
						<br></br>
					</div>


				))}

			</div>
			<br></br>

			<div>
				<button onClick={getBoats}>Visa båtar</button>
			</div>
			<br></br>
		</div>
	)
}


