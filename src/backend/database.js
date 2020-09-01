const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName = 'boats';
const collectionName = 'boats';


//.connect() är en asynkron funktion med 3 parametrar. Den sista parametern (error, client) är en callback-funktion som inte kommer köras direkt. Det som returneras i den hamnar där, och för att alla felmeddelanden och resultat ska nås i getAllBoats() så måste man skicka med resultatet i en annan callback-funktion, som heter "callback".

let getAllBoats = (callback) => {
	MongoClient.connect(url, { useUnifiedTopology: true },
		(error, client) => {
			if (error) {
				//Anropar callback med error-meddelande
				console.log("Error nånstans", error)
				callback("Error vid anslutning till databasen");
				return; //Avslutar callback-funktionen
			}

			const collection = client.db(databaseName).collection(collectionName);
			collection.find().toArray((error, success) => {
				if (error) {
					callback("Error när den skulle plocka ut en collection i db.boats")

				}
				else {
					callback(success)
				}
				client.close()
			});
		})
}

module.exports = {
	getAllBoats
}
