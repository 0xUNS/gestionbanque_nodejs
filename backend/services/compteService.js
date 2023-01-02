const compte = require("../models/compte")

/***********************************************/
// Methode GET
const getAllComptes=async()=>{
    return await compte.find()
}

/***********************************************/
// Methode GET par Id
const getCompteById=async(id)=>{
    return await compte.findOne({_id:id})
}
/***********************************************/
// Methode POST
const createCompte=async(c)=>{
    return await compte.create(c)
}

/***********************************************/
// Methode DELETE
const deleteCompte=async(id)=>{
    return await compte.findByIdAndDelete({_id:id})
}

/***********************************************/
module.exports={
    getAllComptes,
    getCompteById,
    createCompte,
    deleteCompte
}