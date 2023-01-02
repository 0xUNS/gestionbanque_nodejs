const mongoose=require("mongoose")

const compteSchema=new mongoose.Schema({
    solde:Number,
    idC:String
})
const Compte=mongoose.model("Compte", compteSchema)
module.exports=Compte