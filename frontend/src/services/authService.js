import http from "./httpCommon.js"

async function getAll(){
    return await http.get("/auth")
}

async function create(userData){
    return await http.post(`/auth/create`,userData)
}

async function login(userData){
    return await http.post(`/auth`,userData)
}

const authService = { getAll, create, login }

export default authService