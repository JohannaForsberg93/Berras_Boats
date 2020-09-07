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
			<div>

				{boats.map((boat) => (
					<div key={boat._id}>
						<h2>{boat.name}</h2>
						<h4>{boat.price}</h4>
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


