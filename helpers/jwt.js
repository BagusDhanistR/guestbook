// this file is helper for generate and verify jwt
const jwt = require("jsonwebtoken")
const PRIVATE_KEY = "12345"

function generateToken(payload) {
    //to generate token using jsonwebtoken
    return jwt.sign(payload, PRIVATE_KEY)
}

function verifyToken(token) {
    //to verify token using jsonwebtoken
    return jwt.verify(token, PRIVATE_KEY)
}

module.exports = {
    generateToken, verifyToken
}