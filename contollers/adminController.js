const {comparePass} = require("../helpers/password")
const {generateToken} = require("../helpers/jwt")
const {Admin, Guest} = require("../models")
const jwt = require("jsonwebtoken")


module.exports.registerAdmin = async function (req, res, next) {
    try {
        //take data from body
        let {username, password} = req.body
        //check the input value, if not complete, return error
        if(!username || !password ) return res.status(400).json({message: "Incomplete  input data, please recheck the input value"})

        // post data to database admin for cregister admin
        const admin = await Admin.create({username, password})
        //make new variable for returning data
        const dataResult = {
            id: admin.id,
            nama: admin.username
        }
        //return the data
        return res.status(201).json({message: "admin berhasil di registreasi", dataResult})
    } catch (error) {
        //return error
        return res.status(500).json({message: error.message})
    }
}

module.exports.loginAdmin = async function (req, res) {
    try {
        //take data username and password from body
        const {username, password} = req.body
        //check the input value, if not complete, return error
        if(!username || !password ) return res.status(400).json({message: "Incomplete  input data, please recheck the input value"})
        //finding admin by using username
        const admin = await Admin.findOne({where: {username: username}})
        if(admin) {
            //if admin exist then we validate the password using helper comparePass
            const validatePass = comparePass(password, admin.password)
            if(validatePass) {
                //if pass validate the we generate token using helper generateToken
                const access_token = generateToken({
                    id: admin.id
                })
                //return access token
                return res.status(200).json({message: "admin berhasil login", access_token})
            }
            //return error if password validation failed
            return res.status(400).json({message: "Password yang anda masukkan tidak sesuai"})
        }
        //return error if admin not found
        return res.status(404).json({message: "Admin tidak ditemukan"})
    } catch (error) {
        //return error
        return res.status(500).json({message: error.message})
    }
}

module.exports.logoutAdmin = async function (req, res) {
    try {
        //take access token
        const {access_token} = req.headers
        //change access token to "" and setExpires by 1
        jwt.sign(access_token, "", { expiresIn: 1 } , (logout, err) => {
            if (logout) {
                return res.status(200).json({message: "admin berhasil logout"})
            }
        })
    } catch (error) {
        //return error
        return res.status(500).json({message: error.message})
    }
}

module.exports.getAllData = async function (req, res) {
    try {
        //get all data from guest database
        const note = await Guest.findAll()
        //return result
        return res.status(201).json({message: "berikut adalah data semua Note dari tamu:", note})
    } catch (error) {
        //return error
        return res.status(500).json({message: error.message})
    }
}