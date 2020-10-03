const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName = 'boats';
const collectionName = 'boats';


//Hämtar alla båtar
let getAllBoats = (callback) => {
	get({}, callback)
};

// Hämtar en båt med visst id
let getBoatByID = (id, callback) => {
	console.log("Värdet av id", id)
	get({ _id: new ObjectID(id) }, callback)
};

let deleteBoat = (id, callback) => {
	removeBoat({ _id: new ObjectID(id) }, callback)
}


//Funktion som gör GET requests
let get = (filter, callback) => {

	MongoClient.connect(url, { useUnifiedTopology: true },
		(error, client) => {
			if (error) {
				//Anropar callback med error-meddelande
				console.log("Error nånstans", error)
				callback("Error vid anslutning till databasen");
				return; //Avslutar callback-funktionen
			}
			const collection = client.db(databaseName).collection(collectionName);
			collection.find(filter).toArray((error, success) => {
				if (error) {
					callback("Error när den skulle plocka ut en collection i db.boats")
				}
				else {
					callback(success)
				}
				client.close()
			});
		});
};

//Lägg till båt
function addBoat(requestBody, callback) {
	console.log("Detta är requestbody som är skickad med axios från front end", requestBody)
	const document = requestBody

	MongoClient.connect(
		url, { useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				callback("Kunde inte ansluta till databasen");
				return;
			}
			const collection = client.db(databaseName).collection(collectionName);
			try {
				const result = await collection.insertOne(document);
				console.log("Lyckades lägga till båtobjektet!", result.ops)
				callback({
					result: result.result,
					ops: result.ops
				})

			} catch (error) {
				console.error("Error message: ", error.message);
				callback("Kunde inte spara båten till databasen");

			} finally {
				client.close();
			}
		}
	)
};
function removeBoat(id, callback) {

	MongoClient.connect(url, { useUnifiedTopology: true },
		(error, client) => {
			if (error) {
				//Anropar callback med error-meddelande
				console.log("Error vid anslutning", error)
				callback("Error vid anslutning till databasen");
				return; //Avslutar callback-funktionen
			}
			const collection = client.db(databaseName).collection(collectionName);
			collection.deleteOne(id);
			((error, success) => {
				if (error) {
					callback("Error när den skulle plocka ut en collection i db.boats")
				}
				else {
					console.log("Lyckades ta bort båten!")
					callback("Lyckades ta bort båten!")
				}
				client.close()
			});
		});
}

function searchBoat(query, callback) {
	const filter = {};
	if (query.word) {
		filter.name = { $regex: new RegExp(query.word, "i") };
	}
	if (query.maxprice) {
		query.maxprice = Number(query.maxprice)
		filter.price = { $lte: query.maxprice }
	};

	MongoClient.connect(url, { useUnifiedTopology: true },
		(error, client) => {
			if (error) {
				console.log("Error nånstans", error)
				callback("Error vid anslutning till databasen");
				return;
			}
			const collection = client.db(databaseName).collection(collectionName);
			collection.find(filter).toArray((error, success) => {
				if (error) {
					callback("Error när den skulle plocka ut en collection i db.boats")
				}
				else {
					callback(success)
				}
				client.close()
			});
		});
}

module.exports = {
	getAllBoats, getBoatByID, addBoat, deleteBoat, searchBoat
}
