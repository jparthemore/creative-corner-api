/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  unitPrice:{
    required: true,
    type: Number
  },
  byYardPrice:{
    type: Number
  }
});

const productSchema = new Schema({
  productId:{
    type: String
  },
  name:{
    required: true,
    type: String
  },
  description:{
    required: true,
    type: String
  },
  imageURL: {
    type: String
  },
  categories:[{
    type:String,
    required: true
  }],
  prices: {
    type: priceSchema,
    required: true
  },
  availableColors:[{
    type: String
  }],
  quantity:{
    type: Number
  }
  });

const Product = mongoose.model('Product',productSchema);
module.exports = Product;
