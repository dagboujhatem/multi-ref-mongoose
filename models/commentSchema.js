const mongoose = require("mongoose");

const Comment = mongoose.model( "Comment",
  new mongoose.Schema({
    content: String,
    sur: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
        // will look at the `onModel` property to find the right model.
        refPath: 'onModel'
      },
      onModel: {
        type: String,
        required: true,
        enum: ['Post', 'Product']
      }
  },
  {
      timestamps: true,
      versionKey: false
  })
);

module.exports = Comment;