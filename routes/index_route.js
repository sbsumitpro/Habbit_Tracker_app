const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller")

router.get("/",homeController.home)
router.post("/habbits/create",homeController.create)
router.get("/habbits/destroy", homeController.destroyHabbit);
router.get("/habbits/status/toggle", homeController.toggleStatus);

module.exports = router;