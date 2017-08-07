const express = require('express'),
  logger = require('morgan'),
  path = require('path'),
  env = process.env.NODE_ENV || "development",
  Config = require('./config/config')[env],
  app = express(),
  port = process.env.PORT || Config.portHTTP,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser'),
  routes = require('./api/routes/todoListRoutes');

// Connect to DBs
mongoose.Promise = global.Promise;
mongoose.connect(Config.DataBase,{useMongoClient: true,})
  .then(() =>  console.log('Connection to DataBase success'))
  .catch((err) => console.error('Connection to DataBase failed'));
mongoose.set('debug', true);

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(logger('dev'));
app.use(bodyParser.json());

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

//app.listen(port);

module.exports = app;