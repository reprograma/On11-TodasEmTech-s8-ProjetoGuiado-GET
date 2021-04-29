const controllerSerie = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("/:idInput", controllerSerie.getById)
router.get('*', controllerSerie.getSeries)

module.exports = router