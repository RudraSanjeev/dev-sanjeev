const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: String,
    desc: String,
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Movie", movieSchema);
