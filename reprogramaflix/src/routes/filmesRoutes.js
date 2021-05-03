const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/:idRequerido", controller.getById)

module.exports = router