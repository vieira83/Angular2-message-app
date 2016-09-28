var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema; // referes to the mongoose schema object for quick access to it 
//Schema is the blueprint

var schema = new Schema({
	//
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email : {
		type: String,
		required: true,
		unique: true // set it that we only have unique values,
		//By default mongoose doesng check for uniqueness
		// to take of that install a package npm install mongoose-unique-validator
	},
	password: {
		type: String,
		required: true
	},
	message: [{type: Schema.Types.ObjectId, required: true, ref: 'Message'}] 

});

//tells mongoose i want to extend monggose with adiitional functionality that it doesn'thave
// the mongoose validator for uniqueness
schema.plugin(mongooseUniqueValidator);


// Export the model(data) not the Schema
// Schema is just a blueprint, model contains the data
// pass the model name and schema defined
module.exports = mongoose.model('User', schema)