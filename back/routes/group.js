const express = require("express")

const { createGroup, findUserGroups, findGroupMembers, deleteGroup, addMember, removeMember} = require("../controllers/group")
const router = express.Router()

router.post("/creategroup/:userId", createGroup)
router.get("/getusergroups/:userId", findUserGroups)
router.get("/getgroupmembers/:groupId", findGroupMembers)
router.delete("/deletegroup/:groupId", deleteGroup)
router.delete("/addmember/:groupId", addMember)
router.delete("/removemember/:groupId", removeMember)
module.exports = router