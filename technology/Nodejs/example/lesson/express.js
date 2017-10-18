// var express = require('express');

// var app = express();

// app.use(express.static('../../project/node-static-sys/static'));

// app.listen(3000);

var express = require('express');
var app = express();

var admin = express();

admin.on('mount', function (parent) {
  console.log('Admin Mounted');
//   console.log(parent); // refers to the parent app
});

admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});

app.use('/admin', admin);

app.disabled('trust proxy');
// => true
console.log(app.get('trust proxy'));
app.enable('trust proxy');
app.disabled('trust proxy');
// => false
console.log(app.get('trust proxy'));

// app.listen(3000);