const router = require("express").Router()
const guestController =  require("../contollers/guestControllers")

router.post("/add", guestController.addGuest)

module.exports = router