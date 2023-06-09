const compteService = require("../services/compteService")


// Method GET
const getAllComptes=(req,res)=>{
    compteService.getAllComptes()
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}

// Method GET By Id
const getCompteById=(req,res)=>{
    compteService.getCompteById(req.params.id)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))

}

// Method POST
const createCompte=(req,res)=>{
    compteService.createCompte(req.body)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(500).json({msg:error}))
}

// Method DELETE
const deleteCompte=(req,res)=>{
    compteService.deleteCompte(req.params.id)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(404).json({msg:error}))
}

// Method PUT
const updateCompte=(req,res)=>{
    compteService.updateCompte(req.params.id, req.body)
        .then(result=>res.status(200).json({result}))
        .catch(error=>res.status(404).json({msg:error}))
}


module.exports={
    getAllComptes,
    getCompteById,
    createCompte,
    deleteCompte,
    updateCompte
}