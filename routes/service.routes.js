const router = require("express").Router();
const serviceController = require("../controllers/service.controllers")
router.post("/create",serviceController.createservice)
router.get("/",serviceController.getAllservices)
router.put("/edit/:serviceId",serviceController.updateservice)
router.delete("/delete/:serviceId",serviceController.deleteservice)
router.get("/show/:serviceId",serviceController.findserviceById)
module.exports = router;