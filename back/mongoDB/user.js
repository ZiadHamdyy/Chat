const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profileImage: { type: String }
})
const user = mongoose.model("User", userSchema)
module.exports = user