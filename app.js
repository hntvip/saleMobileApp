var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
// Or using promises
const port = 3001;
var app = express();

module.exports = app;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mydatabase',{ useNewUrlParser: true });
var db = mongoose.connection;

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// bootstrap 
require('./express')(app);
// connect();
require('./routes/routes')(app);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});


