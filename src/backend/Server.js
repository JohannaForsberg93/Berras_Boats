//Importerar funktion från database
const { getAllBoats, getBoatByID, addBoat, deleteBoat } = require('./database');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1993;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../components"))
//Visar vilken request metod och route som skickas
app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.get("/", (request, response) => {
	console.log("Listening on port: ", port);
	response.send("Woho it works!")
});


//Alla båtar
app.get("/boats", (req, res) => {
	console.log("På väg att skicka ett GET request")
	getAllBoats(callback => {
		res.send(callback);

	});

})

//Båt med visst id
app.get("/boat/:id", (req, res) => {
	console.log("På väg att skicka ett GET request")
	console.log("Värdet av querystringen", req.query.id)
	getBoatByID(req.query.id, callback => {
		res.send(callback);
	});

})

//Lägga till egen båt
app.post("/boat", (req, res) => {
	console.log("På väg att skicka ett POST request")
	addBoat(req.body, callback => {
		res.send(callback)
	});

})

//Ta bort en båt med id
app.delete("/boat/id", (req, res) => {
	console.log("På väg att skicka ett DELETE-request");
	console.log("Värdet av req.query.id", req.query.id)

	deleteBoat(req.query.id, callback => {
		res.send(callback)
	})
})

app.listen(port, () => {
	console.log("Nu är servern igång på: ", port)
})