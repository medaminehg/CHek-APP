const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
    FilmName: {
        type: String
    },
    photoPath: {
        type: String
    },
    trailer: {
        type: String
    },
    descreption: {
        type: String
    },
    type: {
        type: String
    },
    
    rating :{
        type : Number
    },
    downloadLink : {
        type : String
    }
})

module.exports = Film = mongoose.model("films", filmSchema)  