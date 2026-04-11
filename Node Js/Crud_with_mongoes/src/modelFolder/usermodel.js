const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: String,
    title: String
});

module.exports = mongoose.model("Post", postSchema);