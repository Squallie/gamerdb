//Adds module for Sqlite3
const sqlite3 = require('sqlite3').verbose();


/*Creating Database Object */
//Selects the Database to connect to.
let db = new sqlite3.Database('./Games.db', err => {
    if (err){
        //Returns log if unsuccessful
        return console.error("Unable to connect");
    }
    //Returns log to state conenction success.
    console.log("Connected to UserDB Successfully\n");
});
