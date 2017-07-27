/*jshint esversion: 6*/
const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('morgan');
const cors = require('cors');

//wire up middleware
server.use(logger('dev'));
server.use(cors());

server.get('/',(req,res)=>{
  res.send('It Works');
});

server.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
