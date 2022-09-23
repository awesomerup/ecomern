require('dotenv').config();

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ecomern')
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
