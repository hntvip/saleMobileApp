var express = require('express');
var mongoose = require('mongoose');

// Or using promises
const port = 3001;
var app = express();

module.exports = app;

// bootstrap 
require('./express')(app);
// connect();
require('./routes/routes')(app);

mongoose.connect('mongodb://localhost:27017/mydatabase',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  app.listen(port, () => {
    console.log(`Server started on port`);
  });
});


