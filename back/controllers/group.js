const groupDB = require("../mongoDB/group");
const userDB = require("../mongoDB/user")

const createGroup = async (req, res) => {
    const {name, members} = req.body
    const userId = req.params.userId;
    const Admin = await userDB.findById(userId)
    const group = new groupDB({
        name:name,
        members:[{_id:Admin._id, name:Admin.name}, ...members],
        admin:{_id:Admin._id, name:Admin.name}
    })
    try{
        const response = await group.save()
        res.status(200).json(response)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const findUserGroups = async (req, res) => {
    const userId = req.params.userId;
    try {
      const groups = await groupDB.find({
        $or: [
            { "members._id": userId },
            { "admin._id": userId }
        ]
    });
      res.status(200).json(groups);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
};
const findGroupMembers = async (req, res) => {
    const groupId = req.params.groupId;
    try {
      const members = await groupDB.findOne({ _id:groupId });

      res.status(200).json(members.members);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
};
const deleteGroup = async (req, res) => {
  const { groupId } = req.params;
  try {
    const result = await groupDB.deleteOne({ _id: groupId });
    res.status(200).json(result);
  }catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
const removeMember = async(req, res) => {
  const { groupId } = req.params;
  const { memberId } = req.body;
  try {
    const result = await groupDB.findByIdAndDelete({_id: groupId } & {members:memberId});
    res.status(200).json(result);
  }catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const addMember = async (req, res) => {}
module.exports = { createGroup, findUserGroups, findGroupMembers, deleteGroup, addMember, removeMember };