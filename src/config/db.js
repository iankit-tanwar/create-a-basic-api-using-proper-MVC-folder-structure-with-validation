

const mongoose = require('mongoose');
const env= require("dotenv");
env.config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}.6sujrau.mongodb.net/?retryWrites=true&w=majority`)
.then(d=>console.log('connect'))
.catch(e=>console.log('error',e))


exports.mongoose= mongoose;