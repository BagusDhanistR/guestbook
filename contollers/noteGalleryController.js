const {Guest} = require("../models")

module.exports.getNote = async function (req, res, next) {
    try {
        //get data guest exclude address and phone
        const note = await Guest.findAll({attributes: ['nama', 'catatan']})
        //return result
        return res.status(201).json({message: "berikut adalah data Note dari tamu:", note})
    } catch (error) {
        //return error
        return res.status(500).json({message: error.message})
    }
}