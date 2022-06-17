const express = require('express')
const app = express()
const todos = require('./route/Todos')
const cors = require("cors")

const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(express.json())


app.use(cors())
app.use('/todos',todos)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is running at ${port}...`))
    } catch (error){
        console.log(error)
    }
}

start()