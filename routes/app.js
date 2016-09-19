var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
	var email = '';
	//Finds the user pass id or another unique field in the dabase
	User.findOne({}, function(){
		if (err){
			return res.send(err);
		}
		if (doc) {
			var email = doc.email;
		}
		res.render('index');
	});
});

router.get('/node', function(req, res, next) {
    res.render('node');
});

//Post request
router.post('/node-user', function(req, res, next) {
	var email = 'test@user.com';
	var user = new User({
		firstName: 'Vlad',
		lastName: 'Ferna',
		password: 'test',
		email: email

	});
	user.save();
    res.render('node');
});

module.exports = router;
