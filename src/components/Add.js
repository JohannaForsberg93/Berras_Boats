import React from 'react';
import { useForm } from 'react-hook-form';

export const Add = () => {

	const { register, handleSubmit } = useForm()

	function addBoat(data) {
		console.log("Detta är data från onSubmit-funktionen", data)
		fetch('/boat', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}
		).then(res => res.json())
			.then(res => console.log(res));


		// Funkar inte:
		// axios.post({
		// 	method: 'post',
		// 	url: '/boat',
		// 	body: JSON.stringify(data)
		// })
		// 	.then(response => console.log("Respons efter post", response))
		// 	.catch(error => console.log("Error", error))
	}

	// })

	//Callback är en funktion som skickas som parameter i en annan funktion

	function onSubmit(data) {
		addBoat(data)
		console.log("Det här är ifylld data från formuläret", data);

	}

	return (
		<div>
			<h1>Lägg till en båt:</h1>
			<br></br>
			<br></br>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Namn" name="name" ref={register}></input>
				<input type="number" placeholder="Pris" name="price" ref={register}></input>
				<input type="number" placeholder="Årsmodell" name="year" ref={register}></input>
				<label>Motorbåt</label>
				<input type="radio" value="ja" name="motor" ref={register}></input>
				<label>Segelbåt</label>
				<input type="radio" value="ja" name="sail" ref={register}></input>
				<input type="submit"></input>
			</form>
			<br></br>
			<br></br>
		</div>
	)
}
