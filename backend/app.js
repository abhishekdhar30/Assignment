const express = require('express')
const app = express()
const connectDB = require('./src/config/db')
const userRoutes = require('./src/routes/userRoutes')
const dotenv = require('dotenv')
dotenv.config()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const { errorHandler, notFound }=require('./src/middleware/errorMiddleware')


app.set('view engine', 'ejs')
app.use(express.static('public')) //used for integrating frontend with backend
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())



//this is function call to connect mongodb and its code is present in src/config/db.js
connectDB()

//this is for all routes and its code is in src/routes/userRoutes.js
app.use('/', userRoutes)


app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 3000

//connecting server
app.listen(port, function () {
  console.log('Server Started')
})
