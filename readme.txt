Application Setup and configuration 
1- Node:
 Install latest Node.js from (for hosting our app)

2- SEED PROJECT:
Folder with basic structure need to build any apps (Includes express)

3 – DEPENDENCES:
Install dependences – rum the compand npm install

4- Folder Structure:	
NODE SERVER Files – resides in bin (holds the node server):
each request will come here, and then sent to whatever we setup our create server app to be (in this case is app.js)
Out app.js in the main root will handle the request, routes, etc
ANGULAR Files – Angular files resides in : ASSETS/app folder (write all angular files inside)
GULP TASK – when you run npm gulp, it takes all the files in the assets folder, compiles them and generates a single file called bunde.js:
Public/js/bundle.js
						
RUN THE APP:
In the terminal run – npm start
To run tasks – npm gulp


NODE FLOW OF REQUESTS:
	.set -
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


4- Mongoose:
Connect to database, before performing any operations:
mongoose.connect(path:port_number\database_name) – look at mongod message to see the port number used(ex:27017)
