const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos",controller.getAll)
router.get("/title",controller.getByTitle)
router.get("/genre",controllerByGenre)
router.get("/":id, controller.getById)

module.exports = router

