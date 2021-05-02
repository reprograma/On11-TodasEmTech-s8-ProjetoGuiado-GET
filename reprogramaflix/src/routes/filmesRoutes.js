
const controller = require("../controller/filmesController")
const express = require("express")
const router = express.Router()


router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/genre" , controller.getBygenre)
router.get("/:id",controller.getById)


module.exports = router // exportando o router


