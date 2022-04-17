const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
    name: { type: String, required: true },
    rank: { type: String, required: true },
    place: { type: String, required: true },
    object: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const Character = mongoose.model("characters", CharacterSchema);
module.exports = Character;