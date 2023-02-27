const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")

router.get("/",authController.getAllUsers)
router.post("/",authController.authUser)
router.post("/create",authController.createUser)

module.exports = router