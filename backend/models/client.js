const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    address:String
})
const Client = mongoose.model("Client", clientSchema)
module.exports = Client