var express = require('express');
var router = express.Router();
var User = require('./../models/user');
var { checkSchema , validationResult } = require('express-validator/check');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var userId = req.session.userId;
    if(userId){
        User.findById(userId)
            .exec(function(err,user){
                console.log(user)
                res.render('profile',{user: user})
            })
    }
});

module.exports = router;
