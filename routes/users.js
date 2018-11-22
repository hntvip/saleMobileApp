var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product');
var Color = require('../models/color');
var Post = require('../models/post');
var Comment = require('../models/comment');
var fetch = require('node-fetch');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.get('/all', (req, res) => {
  var url = 'https://sales.hncgroup.vn/ajax-list-san-pham';
  // User.find({}).exec((err, user) => {
  //   if (err) return next(err);
  //   //  res.render('index',{title: "hello"})
  //    return res.render('tu',{title: "Tu says hello"})
  // });
  get('https://sales.hncgroup.vn/ajax-list-san-pham').then(function(data){
    return res.status(200).json(data)
  })
  
});

router.get('/comment', (req, res) => {
  User.findOne({'name':'ABC'}, function(err,data ){
    var newComment = new Comment({
      title: 'create by Tu',
      postedBy: data._id
    })
    newComment.save(function(err){
      if(err){
        console.log(err)
      }
    })
  })

});

router.get('/delete', (req, res) => {
  Post.deleteMany({},(err)=>{
    console.log('done')
  })
  Comment.deleteMany({},(err)=>{
    console.log('done')
  })
});

module.exports = router;

function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}