const mongoose = require("mongoose")

const utilisateurSchema = new mongoose.Schema({
    email:String,
    userName:String,
    password:String
})
const Utilisateur = mongoose.model("Utilisateur", utilisateurSchema)
module.exports = Utilisateur