const express = require("express")
const app = express()
const mongoose = require("mongoose")
const clientRouter = require("./routes/clientRoute")
const compteRouter = require("./routes/compteRoute")
const loggingMiddelware = require("./middlewares/loggingMiddleware")
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

require("dotenv").config()
mongoose.connect(process.env.MONGO_URI)
.then((result)=>app.listen(8080,()=>{
    var date_time = new Date();
    console.log(date_time);
    console.log("Server is running at http://127.0.0.1:8080/")
    console.log("To exit, press Ctrl+C ");
}))
.catch((err)=>console.log(err))

app.use("/clients", clientRouter)
app.use("/comptes", compteRouter)
app.use(loggingMiddelware.loggingUrls)
app.use(loggingMiddelware.loggingParams)

app.get("/",(req,res)=>{
   res.send("<h2> Bienvenue à l'application </h2>")
});
