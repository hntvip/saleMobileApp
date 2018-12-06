var indexRouter = require('./index');
var usersRouter = require('./users');
var productRouter = require('./products');
module.exports = function (app) {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/products', productRouter)
}
