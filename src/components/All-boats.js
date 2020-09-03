import React from 'react';
import axios from 'axios';

export const AllBoats = () => {

	function getBoats() {
		axios.get('/boats')
			.then((response) => { console.log(response) })
			.catch((error) => { console.log("Error", error) })
	}

	return (
		<div>
			<h1>Alla båtar:</h1>
			<br></br>
			<div>
				<button onClick={getBoats}>Klicka mig</button>
			</div>
			<br></br>
		</div>
	)
}


