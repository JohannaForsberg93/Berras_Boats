import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AllBoats = () => {

	const [apiData, setApiData] = useState([]);
	async function getBoats() {

		const response = await axios.get('/boats')
			.then((response) => {
				setApiData(response.data);

			})
			.catch((error) => { console.log("Error", error) });
		console.log("Värdet av apiData", apiData)
	}
	console.log("Värdet av apiData", apiData)
	return (
		<div>
			<h1>Alla båtar:</h1>
			<br></br>
			<ul>
				{apiData.map((boat) => (
					<li key={boat._id}>
						<h2>{boat.name}</h2>
					</li>
				))}
			</ul>
			<div>
				<button onClick={getBoats}>Hämta båtar</button>
			</div>
			<br></br>
		</div>
	)
}


