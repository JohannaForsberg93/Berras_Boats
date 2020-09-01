const mongoose = require('mongoose');

let PostSchema = mongoose.model('PostSchema', {
	id: Number,
	name: String,
	year: Number,
	price: Number,
	sailboat: Boolean,
	motorboat: Boolean


})

module.exports = { PostSchema }