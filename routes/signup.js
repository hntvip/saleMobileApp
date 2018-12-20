var express = require('express');
var router = express.Router();
var { check, validationResult } = require('express-validator/check');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sign-up')
});
router.post('/', [
  // username must be an email
  check('username')
    .isEmail()
    .withMessage('User must be email'),
  check('username')
    .isLength({ min: 8 })
    .withMessage('Username must be at least 8 words'),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
  .withMessage('password must be at least 5 words'),
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
});
module.exports = router;
