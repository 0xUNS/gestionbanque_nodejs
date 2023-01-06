const client = require("../models/client")


// Method GET
const getAllClients=async()=>{
    return await client.find()
}

// Method GET By Id
const getClientById=async(id)=>{
    return await client.findOne({_id:id})
}

// Method POST
const createClient=async(c)=>{
    return await client.create(c)
}

// Method DELETE
const deleteClient=async(id)=>{
    return await client.findByIdAndDelete({_id:id})
}

// Method PUT
const updateClient=async(id)=>{
    return await client.findByIdAndDelete({_id:id})
}


module.exports={
    getAllClients,
    getClientById,
    createClient,
    deleteClient,
    updateClient
}