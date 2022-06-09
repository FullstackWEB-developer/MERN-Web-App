const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    postid: {
      type: String,
      required: true,
      unique: true,
    },
    comment: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", Comment);
