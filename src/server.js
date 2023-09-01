const express = require ('express')
const app = express();
const env = require("dotenv");
const { adminRoute } = require('./router/admin/adminRoute');

env.config()

let PORT = process.env.PORT


app.use('/admin',adminRoute)

app.listen(PORT,()=>{
    console.log(`this server is runing on ${PORT}`)
})