const User = require("../models/auth")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

// Method GET
const getAllUsers = async()=>{
    return await User.find()
}

// Method POST
const authUser = async(userData)=>{
    const user = await User.findOne({ userName:userData.userName })
    if (!user) throw new Error('Invalid credentials')
    const isMatch = await bcrypt.compare(userData.password, user.password)
    if (!isMatch) throw new Error('Invalid credentials')
    
    // Create and sign JWT token
    const payload = { user: { id: user._id } }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}

// Method POST Create
const createUser = async(userData)=>{
    const salt = await bcrypt.genSalt(10)
    userData.password = await bcrypt.hash(userData.password, salt)
    return await User.create(userData)
}

module.exports = {
    getAllUsers,
    authUser,
    createUser
}