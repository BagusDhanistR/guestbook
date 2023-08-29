const router = require("express").Router()
const adminController =  require("../contollers/adminController")
const {authentication} =  require("../middleware/authentication")

router.post("/register", adminController.registerAdmin)
router.post("/login", adminController.loginAdmin)
router.use(authentication)
router.post("/logout", adminController.logoutAdmin)
router.get("/data", adminController.getAllData)

module.exports = router