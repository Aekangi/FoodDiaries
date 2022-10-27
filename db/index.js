const mongoose = require('mongoose')

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/<database_name>'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected.')
  })
  .catch((e) => {
    console.error('Check Connection', e.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
