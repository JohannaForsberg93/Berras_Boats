import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Add = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = handleSubmit((data) => {
		console.log("Du skrev in: ", JSON.stringify(data))
	})

	return (
		<div>
			<h1>Lägg till en båt:</h1>
			<br></br>
			<br></br>
			<form onSubmit={onSubmit}>
				<label>Modell</label>
				<input ref={register} type="text" name="namn" id="namn"></input>
				{/* Vid flera input fields, använd register som ref på dom också */}
				<br></br>
				<label>Årsmodell</label>
				<input type="number"></input>
				<br></br>
				<label>Pris</label>
				<input type="number"></input>
				<br></br>
				<button type="submit">Lägg till</button>
			</form>
			<br></br>
			<br></br>
			<Link to="/"><li>Back to Home</li></Link>
		</div>
	)
}
