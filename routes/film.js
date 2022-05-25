const express = require('express')

const { filmadd} = require('../controllers/film.contrller')
const film = require('../models/film')

const Film = require('../models/film')


const Router = express.Router()

Router.post('/addfilm', filmadd )



Router.get('/getfilm', (req, res) => {
    Film.find()
        .then(film => res.status(200).json(film))
        .catch(err => console.log(err))
        
})

Router.put('/update/:_id', (req, res) => {
    let { _id } = req.params
    Film.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("Film has been updated"))
        .catch(err => res.send(err))
})

Router.delete("/delete/:_id", (req, res) => {
    let { _id } = req.params
    Film.findByIdAndDelete(_id)
        .then(() => res.send("Film has been deleted"))
        .catch(err => res.send(err))
})

module.exports = Router 