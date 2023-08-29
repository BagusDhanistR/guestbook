//this file is for authentication admin
const {Admin} = require("../models")
const {verifyToken} = require("../helpers/jwt")

function authentication(req, res, next) {
    try {
        //take access_token from header
        const {access_token} = req.headers
        //if no access_token return error
        if (!access_token) return res.status(400).json({message: "token not found"})

        //verify the token use verify token
        const token = verifyToken(access_token)
        //find admin by id from the token
        Admin.findByPk(token.id)
        .then((admin) => {
            //if admin found then we set req.admin and send to the next endpoint
            if (admin) {
                req.admin = {
                    id : admin.id,
                    username: admin.username,
                }
                next()
            } else{
                //if admin not found then return error
                return res.status(400).json({message: "admin not found"})
            }
        })
    } catch (error) {
        //return error 
        return res.status(500).json({message: error.message})
    }
}

module.exports = {authentication}