const express = require('express')
const app = express()

//Adds module for Sqlite3
const sqlite3 = require('sqlite3').verbose();


/*Creating Database Object */
//Selects the Database to connect to.
let db = new sqlite3.Database('./Users.db', err => {
    if (err){
        //Returns log if unsuccessful
        return console.error("Unable to connect");
    }
    //Returns log to state conenction success.
    console.log("Connected to UserDB Successfully\n");
});


//Checking login
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		db.query('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});