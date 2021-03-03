const express = require('express');
const router = express.Router();
const Post = require('../models/postSchema');
const Product = require('../models/productSchema');
const Comment = require('../models/commentSchema');

// Dynamic References via `refPath` on mongoose
// Mongoose Docs link : https://mongoosejs.com/docs/populate.html#dynamic-ref

// NB : vous n'avez pas l'autorisation d'utiliser les noms réservés sous mongoose (n'utilser pas 'on')
// ==> check this stackoverflow link : https://stackoverflow.com/questions/24130600/strange-mongoose-schema-js-error-options-may-not-be-used-as-a-schema-pathnam
// Mongoose has a number of Reserved schema names that can't be used, to avoid conflicting with Mongoose's internal implementation.
//  The list, from the docs gives the following as reserved:
//  (on, emit, _events, db, get, set, init, isNew, errors, schema, options, modelName, collection, _pres, _posts, toObject)

router.post('/save',  async(req,res) => {
    const product = await Product.create({ name: 'Product 1', slug: 'product-1', description: 'The description of product 1' });
    const post = await Post.create({ name: 'Post 1', description: 'The description of post 1' });

    const commentOnProduct = await Comment.create({
        content: 'Great read',
        sur: product._id,
        onModel: 'Product'
      });
      
      const commentOnPost = await Comment.create({
        content: 'Very informative',
        sur: post._id,
        onModel: 'Post'
      });

      // return 
      res.status(200).json({message: 'comments created successfully!'});

});

//
router.get('/get', async(req,res) => {
    const comments = await Comment.find().populate('sur').sort({ createdAt: -1 });
     // return 
     res.status(200).json(comments);
});

module.exports = router;