const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Food = new Schema(
  {
    name: { type: String, required: true },
    difficulty_Level: { type: String, required: true },
    time: { type: String, required: true },
    servings: { type: String, required: true },
    ingredients: { type: String, required: true },
    directions: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Food', Food)
