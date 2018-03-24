const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var config = require('./config');

app.use(cors(corsOptions));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.listen(8000, () => {
  console.log('Server started!');
});

app.route('/api/cats').post((req, res) => {
  res.send(201, req.body);
});
app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});
app.route('/api/cats/:name').put((req, res) => {
  res.send(200, req.body);
});
app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204);
});
