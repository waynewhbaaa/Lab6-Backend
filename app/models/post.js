var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	email : String,
	address : String,
	//actually it is the name of the image by the file uploead
	url : String,
	fname : String,
	lname : String,
	phoneno : String,
	hinfo : String,
	count : Number,
	pid : Number
});

module.exports = mongoose.model('post', postSchema);