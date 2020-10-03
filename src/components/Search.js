
import React, { useState } from 'react';
import axios from 'axios';

export const Search = () => {
	const [searchValue, setSearchValue] = useState({
		word: "",
		maxprice: ""
	});
	const [errorMsg, setErrorMsg] = useState(true)
	const [boats, setBoats] = useState([])

	function searchBoat(searchvalue) {
		console.log("Detta är searchvalue i searchBoat funktionen", searchvalue)

		axios.get('/search/?word=' + searchvalue.word + "&maxprice=" + searchvalue.maxprice)
			.then((response) => {
				console.log("Detta är response", response)
				setBoats(response.data);
				setErrorMsg(false)
			})
			.catch((error) => { console.log("Error", error) });
		console.log("Värdet av boats", boats)
	}
	function handleSubmit(e) {
		console.log("Detta är nu searchValue", searchValue)
		console.log("Detta är searchValue.word", searchValue.word)
		e.preventDefault();
		searchValue.maxprice = Number(searchValue.maxprice)
		searchBoat(searchValue)
	}
	return (
		<div>
			<div>
				<h1>Sök efter en båt:</h1>
				<form className="search-form" onSubmit={handleSubmit} >
					<div>
						<input
							placeholder="Båtnamn"
							type="text"
							onChange={e => setSearchValue({ ...searchValue, word: e.target.value })}

						/>
					</div>
					<div>
						<input
							placeholder="Maxpris"
							type="number"
							onChange={e => setSearchValue({ ...searchValue, maxprice: e.target.value })}
						/>
					</div>
					<br></br>
					<input type="submit" value="Submit" />
				</form>
				<h2>Båten du sökte efter: </h2>
				<div className="wrapper">
					{boats.map((boat) => (
						<div key={boat.name}>
							<h2>{boat.name}</h2>
							<p>Pris: {boat.price} :-</p>
						</div>
					))}
				</div>
				{errorMsg ? <h4> Den båt du sökte efter fanns tyvärr inte. </h4> : null}
			</div>
			<br></br><br></br>
		</div>
	)
}