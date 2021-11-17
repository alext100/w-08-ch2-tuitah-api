const { Schema, model } = require("mongoose");

const tuitSchema = new Schema({
  text: {
    type: String,
    maxlength: 200,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Tuit = model("Tuit", tuitSchema, "tuits");

module.exports = Tuit;
