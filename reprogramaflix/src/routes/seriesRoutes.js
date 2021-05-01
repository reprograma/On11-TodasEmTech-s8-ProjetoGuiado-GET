const controller =  require("../controllers/seriesControllers")

const express = require("express")

const router = express.Router()

router.get("/todas", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)
router.get("/:idRequested", controller.getById)

module.exports = router 

