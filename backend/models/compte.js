const mongoose = require("mongoose")

const compteSchema = new mongoose.Schema({
    solde:Number,
    idClient:{
        type:mongoose.Types.ObjectId,
        ref:"Client"
    }
})
const Compte = mongoose.model("Compte", compteSchema)
module.exports = Compte