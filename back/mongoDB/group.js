const mongoose = require("mongoose")

const groupSchema = new mongoose.Schema({
    name: String,
    members: Array,
    admin: {_id: String, name: String },
},
{
    timestamps:true
})
const group = mongoose.model("Group", groupSchema)
module.exports = group