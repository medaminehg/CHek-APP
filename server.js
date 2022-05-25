require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')
const cors = require('cors')
const film = require('./routes/film')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/user', user)
app.use('/film', film)

connectDB()


const PORT = process.env.PORT || process.env.port
app.listen(PORT, err => {
    err ? console.log("Server failed", err)
        : console.log(`Server is running on port ${PORT}`)
})