// | Modules |

//Adds module for Sqlite3
const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const app = express()
const router = express.Router();

/*Creating Database Object */
//Selects the Database to connect to.
let db = new sqlite3.Database('./Games.db', err => {
    if (err){
        //Returns log if unsuccessful
        return console.error("Unable to connect");
    }
    //Returns log to state conenction success.
    console.log("Connected to GamerDB Successfully\n");
});


//    |DATABASE Functions|


/*Query is run on the table and the selected fields
  which is pulled from the SQLite DB and printed in the console log
*/ 

//Dispalys all PS1 Games in the console log
let Playstation_1 = 'SELECT ID id, Title title, Developer dev, Release_Date rd FROM Playstation_1';
db.all(Playstation_1, [] ,(err, rows) => {
    if (err) {
       throw err;
    }
    console.log("List of PS1 Games in DB");
    rows.forEach((row) => {
        console.log(row.id, row.title, row.dev, row.rd);
    });
});

//Dispalys all PS2 Games in the console log
let Playstation_2 = 'SELECT ID id, Title title, Developer dev, Release_Date rd FROM Playstation_2';
db.all(Playstation_2, [] ,(err, rows) => {
    if (err) {
       throw err;
    }
    console.log("List of PS2 Games in DB");
    rows.forEach((row) => {
        console.log(row.id, row.title, row.dev, row.rd);
    });
});

//Displays all PS4 Games in the console log
let Playstation_4 = 'SELECT ID id, Title title, Developer dev, Release_Date rd FROM Playstation_4';
db.all(Playstation_4, [] ,(err, rows) => {
    if (err) {
       throw err;
    }
    console.log("List of PS4 Games in DB");
    rows.forEach((row) => {
        console.log(row.id, row.title, row.dev, row.rd);
    });
});

let Xbox_360 = 'SELECT ID id, Title title, Developer dev, Release_Date rd FROM Xbox_360';
db.all(Xbox_360, [] ,(err, rows) => {
    if (err) {
       throw err;
    }
    console.log("List of Xbox 360 Games in DB");
    rows.forEach((row) => {
        console.log(row.id, row.title, row.dev, row.rd);
    });
});

//Search
router.post('search/game', function(req,res, next){

    var gameName = req.body.gameName;
    console.log(gameName);
    res.redirect('/search');

});

router.get('search/game', function(req,res, next){
    var gameName;
    gameName = req.params.gameName;
    db.select('SELECT * FROM Title title');

});



//Close db once tasks completed 
db.close(); 