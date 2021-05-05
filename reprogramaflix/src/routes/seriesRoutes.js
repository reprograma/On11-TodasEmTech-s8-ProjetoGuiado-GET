const controller = require ("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todas",controller.getAllSeries)
router.get("/title",controller.getByTitleSeries)
router.get("/genre", controller.getByGenreSeries)
router.get("/:id",controller.getByIdSeries)

module.exports = router


