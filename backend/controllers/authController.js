const authService = require("../services/authService")


// Method GET
const getAllUsers=(req,res)=>{
    authService.getAllUsers()
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}

// Method POST
const authUser=(req,res)=>{
    authService.authUser(req.body)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}

// Method POST Create
const createUser=(req,res)=>{
    authService.createUser(req.body)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}


module.exports={
    getAllUsers,
    authUser,
    createUser,
}