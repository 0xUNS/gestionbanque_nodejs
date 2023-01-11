const express=require("express")
const router=express.Router()
const compteController=require("../controllers/compteController")

router.get("/",compteController.getAllComptes)
router.get("/:id",compteController.getCompteById)
router.post("/",compteController.createCompte)
router.delete("/:id",compteController.deleteCompte)
router.put("/:id",compteController.updateCompte)

module.exports=router