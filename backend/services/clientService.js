const client = require("../models/client")

/***********************************************/
// Methode GET
const getAllClients=async()=>{
    return await client.find()
}

/***********************************************/
// Methode GET par Id
const getClientById=async(id)=>{
    return await client.findOne({_id:id})
}
/***********************************************/
// Methode POST
const createClient=async(c)=>{
    return await client.create(c)
}

/***********************************************/
// Methode DELETE
const deleteClient=async(id)=>{
    return await client.findByIdAndDelete({_id:id})
}

/***********************************************/
module.exports={
    getAllClients,
    getClientById,
    createClient,
    deleteClient
}