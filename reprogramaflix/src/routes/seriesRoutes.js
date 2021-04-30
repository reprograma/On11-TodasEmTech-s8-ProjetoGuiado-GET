const controllerSerie = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("/genre", controllerSerie.getByGenre)
router.get("/:idInput", controllerSerie.getById)
router.get('*', controllerSerie.getSeries)

module.exports = router