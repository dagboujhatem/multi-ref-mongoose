const mongoose = require("mongoose");

const Product = mongoose.model( "Product",
  new mongoose.Schema({
    name: String,
    description: String
  },
  {
      timestamps: true,
      versionKey: false
  })
);

module.exports = Product;