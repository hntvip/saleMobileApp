var indexRouter = require('./index');
var usersRouter = require('./users');
var productRouter = require('./products');
var signUpRouter = require('./signup');
var profileRouter = require('./profile');
var logOutRouter = require('./logout');
module.exports = function (app) {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/products', productRouter);
  app.use('/signup', signUpRouter);
  app.use('/logout', logOutRouter);
  app.use('/profile', profileRouter);
}
