const express = require("express")

const { createmessage , getMessages, deleteallMessages, deleteMessage, editMessage} = require("../controllers/message")
const router = express.Router()

router.post("/createmessage", createmessage)
router.get("/:chatId", getMessages)
router.delete("/deleteallmessages/:chatId", deleteallMessages)
router.delete("/deletemessage/:messageId", deleteMessage)
router.put("/editmessage/:messageId", editMessage)
module.exports = router