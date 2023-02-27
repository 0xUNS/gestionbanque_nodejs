import http from "./httpCommon.js"

async function getAll(){
    return await http.get("/clients")
}

async function getById(id){
    return await http.get(`/clients/${id}`)
}

async function deleteById(id){
    return await http.delete(`/clients/${id}`)
}

async function create(client){
    return await http.post(`/clients`,client)
}

async function update(id, client){
    return await http.put(`/clients/${id}`,client)
}

const clientService = { getAll, getById, deleteById, create, update }

export default clientService