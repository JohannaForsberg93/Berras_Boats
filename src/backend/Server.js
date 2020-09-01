// require('./database');

// let { PostSchema } = require('./PostSchema');

//Importerar funktion från database
const { getAllBoats } = require('./database');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1993;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
	console.log("Listening on port: ", port);
	response.send("Woho it works!")
});

//En callbackfunktion är en funktion som skickas som parameter till en annan funktion.
//getAllBoats() är asynkron
//Allt som är från rad 26-29 är en callback-funktion. 

app.get("/boats", (req, res) => {
	getAllBoats(callback => {
		console.log("värdet av callback-funktionen", callback)
		res.send(callback);
	});

})

app.listen(port, () => {
	console.log("Nu är servern igång på: ", port)
})