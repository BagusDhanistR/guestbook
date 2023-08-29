const router = require("express").Router()
const noteController =  require("../contollers/noteGalleryController")

router.get("/getNote", noteController.getNote)

module.exports = router