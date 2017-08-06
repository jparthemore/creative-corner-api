/*jshint esversion: 6*/
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const mongoURI = process.env.MONGOURI || require('./credentials').mongoURI;
const port = process.env.PORT || 8080;

//connect to the db
mongoose.connect(mongoURI,{
  useMongoClient : true
});

//middleware imports
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//router imports
const productRouter = require('./routers/product.router');

//wire up middleware
server.use(logger('dev'));
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//wire up the router(s)
server.use(productRouter);

server.get('/',(req,res)=>{
  res.send('It Works');
});

server.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
