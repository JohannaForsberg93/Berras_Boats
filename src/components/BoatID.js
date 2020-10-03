import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const BoatID = () => {

	const url = "/boat/"
	const [boat, setBoats] = useState([])
	const [errorMsg, setErrorMsg] = useState(false)
	const { register, handleSubmit } = useForm()

	async function searchBoat(data) {
		console.log("Nu är jag i searchBoat-funktionen", data)
		let response = await fetch(url + data.id);
		if (response.ok) {
			let res = await response.json()
			console.log("Detta är båten som kommer tillbaka", res)
			setBoats(res)
			console.log("Värdet av boat", boat)
		}
		else {
			console.log("Error!", response.status)
			setErrorMsg(true)
		}
	}
	function onSubmit(data) {
		searchBoat(data)
		console.log("Det här är ifylld data från formuläret", data);
	}
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Sök på en båt med id:</h1>
					<input type="text" name="id" ref={register}></input>
					<input type="submit"></input>
				</form>
				<br></br>
				<h2>Båten med ditt valda id: </h2>
				{boat.map((boat) => (
					<div key={boat.name}>
						<h2>{boat.name}</h2>
					</div>
				))}
				{errorMsg ? <h4>Något gick fel. Är du säker på att det är rätt id? </h4> : null}
			</div>
			<br></br><br></br>
		</div>
	)
}

