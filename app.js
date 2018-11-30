const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/todo').then(() => {
  mongoClient: true
  console.log('Database Connected');
});

const app = express();
app.use(bodyParser());
app.set('view engine', 'ejs');
app.use('/', require(__dirname + '/routes/routes'));
//setting all static files
app.use(express.static('./public'));

const port = 8000;
app.listen(port, () => {
  console.log('Running on ', port);
});
