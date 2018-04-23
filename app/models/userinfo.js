var mongoose = require('mongoose');


var userinfoSchema = mongoose.Schema({
		email		 : String,
		fname	 	 : String,
		lname	 	 : String,
		phoneno		 : String,
		bio			 : String
	
});

module.exports = mongoose.model('UserInfo', userinfoSchema);