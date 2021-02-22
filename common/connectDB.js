import mongoose from 'mongoose'

export const connectDatabase = () => {
  mongoose.Promise = require('bluebird')  
  // mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URLDEV || process.env.DB_URL}/${process.env.DB_NAME}`, {
  mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
  })
    .then(async () => {
      console.log('dummy Database connection created')
    }).catch((err) => {
      console.log(err)
    })
}
