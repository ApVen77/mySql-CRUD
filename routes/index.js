//dependencies (3)
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Connect to mysql database
//connect and create mysql db 
var connection = mysql.createConnection({
	//set host as localhost
	host: 'localhost',
	// the user is root
	user: 'root',
	//your db password
	password: 'Dancestar86!!',
	//your db name
	database: 'portfolio'
});

//connects to server
connection.connect();

//what is line 23 doing?
router.get('/', function(req, res) {
    connection.query("SELECT * FROM projects", function(err, rows, fields){
    	if(err) throw err;
    	res.render('index', {
    		"projects": rows
    	});
    });
});

//duplicate the above code to add a route
//to deails file. 
// include parameters for :id
router.get('/details/:id', function(req, res) {
    connection.query("SELECT * FROM projects WHERE id = ?", req.params.id, function(err, rows, fields){
    	if(err) throw err;
    	res.render('details', {
    		"project": rows[0]
    	});
    });
});

module.exports = router;
