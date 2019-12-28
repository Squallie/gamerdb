//-------------MODULES-------------------------/
//Adding Express Module
const express = require('express')
const app = express()

//Adds module for Sqlite3
const sqlite3 = require('sqlite3').verbose();

//Adds module for passport.js
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

//Adds the Crypto Module
const crypto = require('crypto')
//---------------------------------------------/

/*Creating Database Object 
 Selects the Database to connect to. */
let db = new sqlite3.Database('./Users.db', err => {
    if (err){
        //Returns log if unsuccessful
        return console.error("Unable to connect");
    }
    //Returns log to state connection success.
    console.log("Connected to UserDB Successfully\n");
});

//Function to hash password
function hashPassword(password, Livi) {
	const hash = crypto.createHash('sha256');
	hash.update(password);
	hash.update(Livi);
	return hash.digest('hex');
}

//Used to search db to query data
passport.use(new LocalStrategy((username, password, done) => {
	db.get('SELECT Livi From Users WHERE Username = ?', username, (err, row) => {
		if(!row){
			return done(null, false);
			var hash = hashPassword(password, row.Livi);
			db.get('SELECT Username from Users WHERE Username = ? AND Password = ?', username, hash,
			(err,rows) =>{
			if(!row){
				return done(null, false);
			}
			return done(null, rows);
			});
		}
	});
    }
));

//Serialize User
passport.serializeUser((user, done) => {
	return done(null, user.id)
})

//Deserialize User
passport.deserializeUser((id, done) =>{
	db.get('SELECT id, username FROM users WHERE id = ?', id, function(err, row) {
		if (!row) return done(null, false);
		return done(null, row);
	  });
})


//Passport Authentication
app.post('/auth', passport.authenticate('local', {
    failureRedirect: '/login',
    succussRedirect: '/'
}));


function isLoggedin(req, res, next){
    if(req.isauthenticated()){
        return next();
    } else {
        return res.redirect('/login');
    }
}
