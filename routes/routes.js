var indexRouter = require('./index');
var usersRouter = require('./users');

module.exports = function (app) {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
}
