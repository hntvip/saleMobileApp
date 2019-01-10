var express = require('express');
var router = express.Router();
var { checkSchema , validationResult } = require('express-validator/check');
var User = require('./../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sign-up')
});
router.post('/', checkSchema({
  password: {
    isLength: {
      errorMessage: 'Password should be at least 5 chars long',
      // Multiple options would be expressed as an array
      options: { min: 7 }
    }
  },
  passwordConf: {
    custom: {
      options: function(){

      }
    }
  },
  email: {
    isEmail: {
      errorMessage: 'Email must contain at least @ character'
    }
  }
}), function(req, res, next) {
    var user = new User(req.body);
    if(user){
      User.create(user, function(err, result){
        if(!err){
          req.session.userId = result._id;
         res.redirect('/profile');
        }
        // next(err);
      })
    } else {
      console.log("user is error")
    }
    
})
module.exports = router;
