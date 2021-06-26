const controller = require("../controllers/seriesController");

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAllSeries)
router.get("/title", controller.getSerieBytitle)
router.get("/genre", controller.getSeriesByGenre)
router.get("/:id", controller.getSeriesById)

module.exports = router;