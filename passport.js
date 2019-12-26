
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const express = require('express')
const app = express()

//Passport Authentication
app.get('/auth', passport.authenticate('local', {
    failureRedirect: '/login',
    succussRedirect: '/'
}));

passport.use(new LocalStrategy(
    (username, password, done) => {
        if(username == Username && password == Password ){
            return done(null, {username: Username});
        } else {
            return done(null, false);
        }
    }
))

function isLoggedin(req, res, next){
    if(req.isauthenticated()){
        return next();
    } else {
        return res.redirect('/login');
    }
}