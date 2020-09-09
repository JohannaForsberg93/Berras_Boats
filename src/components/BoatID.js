import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


//Att göra:
// En useState som visar vilken båt man sökte efter

export const BoatID = () => {

	const url = "/boat?id="
	const [boat, setBoats] = useState([])
	const [errorMsg, setErrorMsg] = useState(false)

	console.log("Detta är boat nu", boat.name)
	const { register, handleSubmit } = useForm()
	// console.log("Detta är data från onSubmit-funktionen", data)


	async function searchBoat(data) {
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
				<br></br>

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

