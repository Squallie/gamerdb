const express = require('express')
const app = express()
const port = 3000

let GameTitle = "Death_Stranding"

//Establishes folder for static docs
app.use(express.static('public'))

//Index page
app.get('/home', (req, res) => res.render('index.html'))

//Navbar - Games Tab
app.get(`/Game_Archive`, function(req, res){
  res.sendfile(`./public/GameList.html`);
});

//Route and Template for game
app.get('/Login', function(req,res){
  res.sendfile(`./public/login.html`);
 }); 

//Route and Template for game
app.get(`/Death_Stranding`, function(req,res){
 res.sendfile(`./public/${GameTitle}.html`);
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*To do List
 *Need to find a way to make app get dynamically find   the path 
 */