import http from "./httpCommon.js"

async function getAll(){
    return await http.get("/comptes")
}

async function getById(id){
    return await http.get(`/comptes/${id}`)
}

async function deleteById(id){
    return await http.delete(`/comptes/${id}`)
}

async function create(compte){
    return await http.post(`/comptes/`,compte)
}

async function update(id, compte){
    return await http.put(`/comptes/${id}`,compte)
}

const compteService = { getAll, getById, deleteById, create, update }

export default compteService