const controller = require("../controllers/seriesController")//chama o controller series

const express = require("express")//chama o express
const router = express.Router()//roda o express router

//trazendo rotas
router.get("/all", controller.allSeries)//all series 
router.get("/title", controller.seriesByTitle)//series by title 
router.get("/genre", controller.seriesByGenre)//series by genre 
router.get("/:seriesId", controller.seriesByID)// series by id




module.exports = router // exporta router