const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/foodsDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected.')
  })
  .catch((e) => {
    console.error('Check Connection', e.message)
  })

const db = mongoose.connection

module.exports = db
