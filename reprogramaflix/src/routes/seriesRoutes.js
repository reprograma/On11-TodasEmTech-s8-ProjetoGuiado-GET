const controller = require("../controller/seriesController")

const express = require("express")

const router = express.Router()

router.get("/todas", controller.getAllSeries)
router.get("/id", controller.getSerieById)
router.get("/title", controller.getSeriesByTitle)
router.get("/genero", controller.getSerieByGenre)


module.exports = router 
