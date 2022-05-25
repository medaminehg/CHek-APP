const Serie = require('../models/serie')

exports.serieadd = async (req, res) => {

    const nvserie = { ...req.body }
    
    try {
        const newserie= await new Serie ({ ...nvserie })

        

        await newserie.save()
        res.status(200).json({ msg: "film add  successfly" })
    } catch (error) {
        res.status(401).json({ msg: "film add  failed" })
    }
}