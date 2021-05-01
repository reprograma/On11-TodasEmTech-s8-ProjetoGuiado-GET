const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();

router.get("/allSeries", controller.getSeries)

router.get("/serieTitle", controller.getSerieTitle)

router.get("/serieGenre", controller.getSerieGenre)

router.get("/:id", controller.getSeriesId)

module.exports = router;