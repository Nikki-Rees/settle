const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  room: { type: String, required: true },
  title: { type: String, required: true },
  condition: { type: String, required: true },
  clean: String,
  function: String,
  image: String,
  imageId: String,
  body: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
