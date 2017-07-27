/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

//Read routes
router.get('/products',(req,res)=>{
  res.send('getting all the products');
});
router.get('/products/category',(req,res)=>{
  res.send('getting all the products for a given category');
});

//Create routes
router.post('/products',(req,res)=>{
  res.send('creating a new product');
});

//update routes
router.put('/products/prod',(req,res)=>{
  res.send("updating a product's information");
});

//delete routes
router.delete('/products/prod',(req,res)=>{
  res.send('deleting a product from the offerings');
});


module.exports = router;
