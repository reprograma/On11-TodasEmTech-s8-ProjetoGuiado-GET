const controller = require("../controllers/seriesController")

const express = require("express") 

const router = express.Router()

router.get("/todas", controller.getAllSeries)
router.get("/titulo", controller.getBySerieTitle)
router.get("/genero", controller.betbySerieGenre)
router.get("/:id", controller.getBySerieId)

module.exports = router 
