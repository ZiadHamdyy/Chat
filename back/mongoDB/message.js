const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    text: String,
    senderId: String,
    senderName: String,
    chatId: String
},{
    timestamps: true
})
const message = mongoose.model("Message", messageSchema)
module.exports = message