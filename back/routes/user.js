const express = require("express")

const { userRegister, userSignIn, findUserById, findAllUsers } = require("../controllers/user")
const router = express.Router()

router.post("/register", userRegister)
router.post("/signin", userSignIn)
router.get("/find/:userId", findUserById)
router.get("/", findAllUsers)
module.exports = router