import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


//Att göra:
// Fixa så att man kan visa vilken båt man sökte efter

export const BoatID = () => {

	const url = "/boat?id="
	const [boat, setBoats] = useState([{}])

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

			</div>
			<br></br><br></br>
		</div>
	)





}

