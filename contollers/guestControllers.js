const {Guest} = require("../models")

module.exports.addGuest = async function (req, res, next) {
    try {
        //take data from body
        let {nama, alamat, nomor_telepon, catatan} = req.body
        //create guest data and store to db
        const guest = await Guest.create({nama, alamat, nomor_telepon, catatan})
        //return result
        return res.status(201).json({message: "data tamu berhasil diinput", guest})
    } catch (error) {
        //return error
        return res.status(500).json({message: error.message})

    }
}