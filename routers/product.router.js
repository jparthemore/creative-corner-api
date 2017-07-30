/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

//Read routes
router.get('/products',(req,res)=>{
  Product.find({},function(err,docs){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      products: docs
    });
  });
});
router.get('/products/category/:category',(req,res)=>{
  Product.find({categories: req.params.category},function(err,docs){
    if (err) return res.status(500).json({err: err});
    return res.status(200).json({
      products:docs
    });
  });
});

/*//Create routes
router.post('/products',(req,res)=>{
  res.send('creating a new product');
});

//update routes
router.put('/products/:prodId',(req,res)=>{
  res.send("updating a product's information");
});

//delete routes
router.delete('/products/prod',(req,res)=>{
  res.send('deleting a product from the offerings');
});*/


module.exports = router;
