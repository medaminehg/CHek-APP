
const Film = require('../models/film')

exports.filmadd = async (req, res) => {

    const film = { ...req.body }

 
    try {
        const newfilm = await new Film({ ...film })

        

        await newfilm.save()
        res.status(200).json({ msg: "film add  successfly" })
    } catch (error) {
        res.status(401).json({ msg: "film add  failed" })
    }
}