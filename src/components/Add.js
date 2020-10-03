import React from 'react';
import { useForm } from 'react-hook-form';

export const Add = () => {
	const { register, handleSubmit } = useForm()

	function addBoat(data) {
		if (data.motor === "") {
			data.motor = "nej";
		}
		console.log("Värdet av motor", data.motor)

		if (data.sail === "") {
			data.sail = "nej";
		}
		console.log("Värdet av motor som jag ändrade till en boolean nu", data.motor)
		data.price = Number(data.price)
		data.year = Number(data.year)
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
	}
	function onSubmit(data) {
		addBoat(data)
		console.log("Det här är ifylld data från formuläret", data);
	}
	return (
		<div>
			<h1>Lägg till en båt:</h1>
			<form className="form-style" onSubmit={handleSubmit(onSubmit)}>
				<div><input type="text" placeholder="Namn" name="name" ref={register}></input></div>
				<div><input type="number" placeholder="Pris" name="price" ref={register}></input></div>
				<div><input type="number" placeholder="Årsmodell" name="year" ref={register}></input></div>
				<div>
					<label>Motorbåt</label>
					<input type="radio" value="ja" name="motor" ref={register}></input>
					<label>Segelbåt</label>
					<input type="radio" value="ja" name="sail" ref={register}></input>
				</div>
				<br></br>
				<input type="submit"></input>
			</form>
		</div>
	)
}
