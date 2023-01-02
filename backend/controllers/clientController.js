const clientService = require("../services/clientService")


/***********************************************/
// Methode GET
const getAllClients=(req,res)=>{
    clientService.getAllClients()
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}

/***********************************************/
// Methode GET par Id
const getClientById=(req,res)=>{
    clientService.getClientById(req.params.id)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))

}
/***********************************************/
// Methode POST
const createClient=(req,res)=>{
    clientService.createClient(req.body)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}

/***********************************************/
// Methode DELETE
const deleteClient=(req,res)=>{
    clientService.deleteClient(req.params.id)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(404).json({msg:error}))
}

/***********************************************/
module.exports={
    getAllClients,
    getClientById,
    createClient,
    deleteClient
}