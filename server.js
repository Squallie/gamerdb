
//Modules
//Add http Module
//const http = require('http');

//Express Modules
const express = require('express')
const app = express()
const path = require('path');
const port = 3000

let GameTitle = "Death_Stranding"

//Establishes folder for static docs
app.use(express.static('public'))

// - Index page
//Index page
app.get('/', (req, res) => res.sendFile(__dirname+'index.html'))

// - Navbar - Games Tab
app.get(`/Game_Archive`, function(req, res){
  res.sendfile(`./public/GameList.html`);
});

//Route and Template for a game
app.get(`/Death_Stranding`, function(req,res){
 res.sendfile(`./public/${GameTitle}.html`);
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))