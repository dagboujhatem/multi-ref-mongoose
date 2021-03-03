const mongoose = require("mongoose");

const Post = mongoose.model( "Post",
  new mongoose.Schema({
    name: String,
    slug: String,
    description: String
  },
  {
      timestamps: true,
      versionKey: false
  })
);

module.exports = Post;