const LocalStrategy = require('passport-local').Strategy;


//Passport Authentication
app.get('/auth', passport.authenticate(local, {
    failureRedirect: '/login',
    succuessRedirect: '/'
}));

passport.use(new LocalStrategy(
    (username, password, done) => {
        if(username == "" && password == ""){
            return done(null, {username: });
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