var express = require('express');
var router = express.Router();
var passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
  },
  function(email, password, done) {
    User.findOne({
      email:email,
    },function(err,user){
      if (err) {
        res.send(err)
      }
      if (user) {
        if (user.password===crypto.createHmac('sha256',user.salt)
            .update(password).digest('hex')) {
           return done(null,user);
        } else {
          res.send('wrong password')
        }

      } else {
        res.send('user doesnt exist')
      }
    })
  }
));




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.post('/login',)

module.exports = router;
