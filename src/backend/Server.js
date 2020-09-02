// require('./database');

// let { PostSchema } = require('./PostSchema');

//Importerar funktion från database
const { getAllBoats, getBoatByID } = require('./database');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1993;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Visar vilken request metod och route som man skickar
app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.get("/", (request, response) => {
	console.log("Listening on port: ", port);
	response.send("Woho it works!")
});

//En callbackfunktion är en funktion som skickas som parameter till en annan funktion.
//getAllBoats() är asynkron

//Alla båtar
app.get("/boats", (req, res) => {
	console.log("På väg att skicka ett GET request")
	getAllBoats(callback => {
		// console.log("värdet av callback-funktionen", callback)
		//Om allt går vägen så skickas båtobjekten till routen /boats
		res.send(callback);
	});

})

//Båt med visst id
app.get("/boat", (req, res) => {
	console.log("På väg att skicka ett GET request")
	getBoatByID(req.query.id, callback => {
		// console.log("värdet av callback-funktionen i /boat:id", callback)
		res.send(callback);
	});

})

//Lägga till egen båt
app.post("/boat?", (req, res) => {
	console.log("På väg att skicka ett POST request")
	addBoat(req.body, callback);
	res.send(callback)
})

app.listen(port, () => {
	console.log("Nu är servern igång på: ", port)
})