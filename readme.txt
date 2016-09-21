Application Setup and configuration 
1- Node:
 Install latest Node.js from (for hosting our app)

2- SEED PROJECT:
Folder with basic structure need to build any apps (Includes express)

3 – DEPENDENCES:
Install dependences – rum the compand npm install

4- FODLER STRUCTURE:	
NODE SERVER Files – resides in bin (holds the node server):
each request will come here, and then sent to whatever we setup our create server app to be (in this case is app.js)
Out app.js in the main root will handle the request an then passed to routes, etc
ROUTES – directs all routes to their appropriate view(handlebars template)
ANGULAR Files – Angular files resides in : ASSETS/app folder (write all angular files inside)
GULP TASK – 
sudo npm install -g gulp – install gulp
npm install gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev
when you run  gulp:
it takes all the files in the assets folder, compiles them and generates a single file called bunde.js:
Public/js/bundle.js
good practice name the files the first portion the foder they are in : ex: app.component, message.component
						
RUN THE NODE APPand server:
In the terminal run – npm start
To run tasks – npm gulp


NODE FLOW OF REQUESTS:
	.set – to set properties
	.get - Middlewares



MONGODB:
1- Installation-
	before being used , mongod needs to be downloaded and installed.
	
2- Launch Server: Launch MongoDB Server to allow server operations
Navigate to the folder where mongo folder is installed or copied:
cd ../mongodb/bin
Start the server  by running the command
mongoD –dbpath “/data/db” (path to the data folder contains the database)

3- Launch Client: Launch MongoDB Client to interact with Database operations
	example of client is mongoose 	
	mongo – start client – where you can perform mongo operations


4- MONGOOSE
Connect to database, before performing any operations:
mongoose.connect(path:port_number\database_name) – look at mongod message to see the port number used(ex:27017), the database name will be created if it doesn't exist
	 comand line: 
		mongo
		use node-angular
		db.user.find()
		db.user.remove({})
	Model:
To create a model, first thing we need to do is setup a schema(blueprint):
		var mongoose = require('mongoose');
		var Schema = mongoose.Schema; //  mongoose schema object for quick access
		var schema = new Schema({
			firstName: {
				type: String,
				required: True
			},
			user: {
				type: mongoose.Types.ObjectId,// it's different than string we want to 						refer to the id of the user that was created
				ref: 'User' // ref means to which model it relates, in this case User model
		}
		module.exports = mongoose.model('message', schema)

Insert Data in Model(mongo) - SAVE:
		var User = require('../models/user');
		var user = new User({
			firstName: 'test',
			lastName:'test',
			password:'test',
			email:
		});
		user.save();

Retrieve Data in Model(mongo) – findOne():
		User.findOne({},function(){
			if(err) {
				res.send('Error');
			}
		});








ANGULAR:
	START:
boots.js – boostrap the angular application , telling it the first component to load:
In the index.hbs :
System.import('boot') .then(null, console.error.bind(console)); // calls the boots.js
bootstrap(AppComponent); // bhuilt in command to load the first component
my-app is the root component, refers to app.component file
	
	COMPONENTS:
@component – typescript decorator, adds a class and metadata to a class 
metadata – angular allow to transform a class into something else
Selector – selector used to render the component to
Data binding – allow dynamic data enter and change also listen o evens like clicks
ex:  export class AppComponent {
	message = {
		content: 'A message',
		author: 'Vlad'
	};
}
			{{ message.content }} - string inerpolotion

STYLING – CSS
one way to add styling is add another congiguration to the medata, called STYLES:
ex: styles: [` 
.author {
display:inline;
} 
`]  - styles attribute takes an array with string

ngModel -  keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen.
Ex: [(ngModel)] = “message.content”
