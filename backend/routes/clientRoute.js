const express=require("express")
const router=express.Router()
const clientController=require("../controllers/clientController")

router.get("/",clientController.getAllClients)
router.get("/:id",clientController.getClientById)
router.post("/",clientController.createClient)
router.delete("/:id",clientController.deleteClient)
router.put("/:id",clientController.updateClient)

module.exports=router