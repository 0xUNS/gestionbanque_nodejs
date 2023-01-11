const compte = require("../models/compte")

// Method GET
const getAllComptes = async()=>{
    return await compte.find().populate("idClient")
}

// Method GET By Id
const getCompteById = async(id)=>{
    return await compte.findOne({_id:id})
}

// Method POST
const createCompte = async(c)=>{
    return await compte.create(c)
}

// Method DELETE
const deleteCompte = async(id)=>{
    return await compte.findByIdAndDelete({_id:id})
}

// Method PUT
const updateCompte = async(id, c)=>{
    return await compte.findByIdAndUpdate({_id:id}, c)
}

module.exports = {
    getAllComptes,
    getCompteById,
    createCompte,
    deleteCompte,
    updateCompte
}