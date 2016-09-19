var mongoose = require('mongoose');

var Schema = mongoose.Schema; // referes to the mongoose schema object for quick access to it 
//Schema is the blueprint
var schema = new Schema({
	//
	content: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Types.ObjectId,// it's different than string we want to refer to the id of the user that was created
		ref: 'User' // ref means to which model it relates to , in this case User model
	}
});

// Export the model(data) not the Schema
// Schema is just a blueprint, model contains the data
// pass the model name and schema defined
module.exports = mongoose.model('message', schema)