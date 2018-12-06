var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var fetch = require('node-fetch');
/* GET users listing. */
router.get('/copy', function(req, res, next) {
  
});

router.get('/copyAll', (req, res) => {
  var url = 'https://sales.hncgroup.vn/ajax-list-san-pham';
 
  get(url).then(function(data){
    data.forEach(element => {
      element.khohang = "MINH_PHAT";
    });
    Product.insertMany(data, function(err, docs){
      if(err)  console.log("error "+err);
      return res.status(200).json("DONE")
    })
  })
  
});

router.get('/updateAll', (req, res) => {
  var url = 'https://sales.hncgroup.vn/ajax-list-san-pham';
 
  get(url).then(function(data){
    data.forEach(element => {
     var _code = element.code;
     Product.findOneAndUpdate({code:_code},
      {
        $set: {
          code: element.code,
          name: element.name,
          img: element.img,
          quantity: element.quantity,
          text: element.text,
          khohang:"TU"
        }
      }
      ).then(function (res) {
        console.log("yes")
      })
    });
  })
});

router.get('/deleteAll', function(req, res, next) {
  Product.deleteMany(function(err){
    if(err)  console.log("error ");
    res.status(200).json("DONE");
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