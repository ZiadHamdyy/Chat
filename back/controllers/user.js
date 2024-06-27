const userDB = require("../mongoDB/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator")

const createToken = (_id) => {
    jwtkey = process.env.JWT_KEY
    return jwt.sign({_id}, jwtkey, { expiresIn: "30d" })
}
const userRegister = async (req, res) => {
    try{
        const {name, email, password, profileImage } = req.body;

        let user = await userDB.findOne({email})

        if (!name || !email || !password)
            return res.status(400).json("All field are required")
        if(user)
            return res.status(400).json("User with the given email is already exist")

        if (!validator.isEmail(email))
            return res.status(400).json("Email not valid")

        if (!validator.isStrongPassword(password))
            return res.status(400).json("Password not Strong")

        user = new userDB({name, email, password})

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()

        const token = createToken(user._id)
        res.status(200).json({_id: user._id, name, email, profileImage, token})

    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const userSignIn = async (req, res) =>{
    const {email, password} = req.body;
    try{
        let user = await userDB.findOne({email})

        if (!email || !password)
            return res.status(400).json("All field are required")


        if(!user)
            return res.status(400).json("User with the given email is not exist")

        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword)
            return res.status(400).json("invalid email or password")

        const token = createToken(user._id)
        res.status(200).json({_id: user._id, name: user.name, email, token})
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const findUserById = async (req, res) => {
    const userId = req.params.userId
    try{
        user = await userDB.findById(userId)
        console.log("user",user);
        res.status(200).json(user)
        return user
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}
const findAllUsers = async (req, res) => {
    try{
        users = await userDB.find()
        res.status(200).json(users)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { userRegister, userSignIn, findUserById, findAllUsers }