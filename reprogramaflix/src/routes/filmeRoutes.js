const controller = require("../controller/filmesController")
const express = require("express")
const router = express.Router();


router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/gener", controller.getByGener)
router.get("/:id", controller.getById)


module.exports = router;

